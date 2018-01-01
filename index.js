

const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
const fs = require('fs');
const config = require('./cfg/config.js')
global.config = config
const respondFile = JSON.parse(fs.readFileSync('./cfg/responds.json', 'utf8'));
const talkedRecently = new Set();
client.commands = new discord.Collection();
const cmdFiles = fs.readdirSync('./cmd');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('database', 'user', 'password', {
  host: config.database.host,
  username: config.database.username,
  password: config.database.password,
  dialect: 'mysql',
  logging: false,
});
global.sequelize = sequelize
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
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('message', (message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  if(respondFile[message.content]) {
    message.channel.send(respondFile[message.content])
  }

  if(message.author.bot || !message.content.startsWith(config.prefix)) return; //to prevent chaos and log spam happen

  if (talkedRecently.has(message.author.id)) return message.reply('u have to wait 3 seconds!!!111!');
  talkedRecently.add(message.author.id);
  setTimeout(() => {
  talkedRecently.delete(message.author.id);
  }, 3000);

  const command = client.commands.get(commandName) 
    || client.commands.find(command => command.aliases && command.aliases.includes(commandName))
  if (command.guildOnly && message.channel.type !== 'text') return message.reply(`${message.author}, I can\'t execute that command inside DMs!`)
  if (command.args && !args.length) {
    let reply = `\:x: You didn\'t provide any arguments, ${message.author}!`
    if (command.usage) reply += `\nThe proper usage would be: \`${config.prefix}${command.name} ${command.usage}\``
    return message.channel.send(reply)
  }
  if (command.ownerOnly) {
    if (message.author.id !== config.ownerID) return message.channel.send(`${message.author}, you don\'t have permission to use this command!`)
  }
  try {
    message.delete();
    command.execute(message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.tokens.bot); 


