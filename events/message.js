const db = require('quick.db');
const config = require('../cfg/config.js');
exports.run = (client, message, respondFile, talkedRecently) => {
    db.fetchArray(`inventory_${message.author.id}`).then(invFetched => {
      if(invFetched.includes('1') && message.content.endsWith(' /r')) message.react('357315026283134976');
      if (invFetched.includes('2') && message.content.endsWith(' /r')) message.react('377430402585067521');
    });
    if (message.content.includes('@everyone')) message.react('414702380924272665');
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    if(respondFile[message.content]) {
      db.fetchObject(`response_${message.guild.id}`).then(i => {
        if (i.text === 'FALSE' || !i.text) return; //since some guild dont want be annoyed k;lk
          else {
            message.channel.send(respondFile[message.content]); //and i make a glorious shit for your salty guild xdddddd
            console.log(`${message.author.username} trigger the bot with response '${message.content}'`);
          }
      });
    }
    
    if(message.author.bot || !message.content.startsWith(config.prefix)) return; //to prevent chaos and log spam happen
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
      if (command.usage) reply += `\nThe proper usage would be: \`${config.prefix}${command.name} ${command.usage}\``;
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