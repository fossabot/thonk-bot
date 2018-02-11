const db = require('quick.db')
const config = require('../cfg/config.js')
exports.run = (client, message, respondFile, talkedRecently) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    if(respondFile[message.content]) {
      db.fetchObject(`response_${message.guild.id}`).then(i => {
        if (i.text === 'off' || i.text === 'false' || !i.text) return
          else {
            message.channel.send(respondFile[message.content])
            console.log(`${message.author.username} trigger the bot with response '${message.content}`)
          }
      })
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
    if (command.ownerOnly && message.author.id !== config.ownerID) return message.channel.send(`${message.author}, you don\'t have permission to use this command!`)
    try {
      command.execute(message, args);
      console.log(`${message.author.username} used the command '${command.name}' `)
    } catch (err) {
      console.log(err);
    }
}