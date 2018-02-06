

const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
global.discord = discord;
global.client = client;
const fs = require('fs');
const config = require('./cfg/config.js')
global.config = config
const respondFile = JSON.parse(fs.readFileSync('./cfg/responds.json', 'utf8'));
const talkedRecently = new Set();
client.commands = new discord.Collection();
const cmdFiles = fs.readdirSync('./cmd');

for (const file of cmdFiles) {
  const cmd = require(`./cmd/${file}`)
  client.commands.set(cmd.name, cmd)
}

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args, respondFile, talkedRecently, config));
  });
});



client.login(config.tokens.bot); 


