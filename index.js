const discord = require('discord.js');
const client = new discord.Client({ disableEveryone: true });
const fs = require('fs');
const respondFile = JSON.parse(fs.readFileSync('./cfg/responds.json', 'utf8'));
const talkedRecently = new Set();
const cmdFiles = fs.readdirSync('./cmd');
const config = require('./cfg/config.js');
const DBL = require('dblapi.js');
client.commands = new discord.Collection();
global.client = client;
global.discord = discord;
for (const file of cmdFiles) {
  const cmd = require(`./cmd/${file}`);
  client.commands.set(cmd.name, cmd);
}
process.on('unhandledRejection', error => console.error(`Uncaught Promise Rejection:\n${error}`));
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const eventFunction = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args, respondFile, talkedRecently, config));
  });
});

if (config.public) { const dbl = new DBL(config.tokens.dbl, client); } //eslint-disable-line
client.login(config.tokens.bot); 