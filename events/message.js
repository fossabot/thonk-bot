const db = require('quick.db');
const config = require('../cfg/config.js');
exports.run = async (client, message, respondFile, talkedRecently) => {
    let prefix;
    if (message.channel.type === 'text') {
      const prefixFetched = await db.fetch(`prefix_${message.guild.id}`);
      prefix = prefixFetched;
    } else prefix = config.prefix;
      const prefixMention = new RegExp(`^<@!?${client.user.id}>`);
      if (message.content.match(prefixMention) && message.channel.type === 'text') message.channel.send(`**My prefix here is** \`${prefix}\` `);
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const commandName = args.shift().toLowerCase();
    if(message.author.bot || !message.content.startsWith(prefix)) return; 
    if (talkedRecently.has(message.author.id)) return message.reply('u have to wait 3 seconds!!!111!');
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 3000);
    
    const command = client.commands.get(commandName) 
    || client.commands.find(command => command.aliases && command.aliases.includes(commandName)); //eslint-disable-line no-shadow
    if (!command) return;
    if (command.guildOnly && message.channel.type !== 'text') return message.reply(`${message.author}, I can\'t execute that command inside DMs!`);
    if (command.args && !args.length) {
      let reply = `\<:redtick:412529964945113100> You didn\'t provide any arguments, ${message.author}!`;
      if (command.usage) reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
      return message.channel.send(reply);
    }
    if (command.ownerOnly && message.author.id !== config.ownerID) return message.channel.send(`${message.author}, you don\'t have permission to use this command!`);
    try {
      command.execute(message, args);
      console.log(`${message.author.username} used the command '${command.name}' `);
    } catch (err) {
      console.log(err);
    }
};
