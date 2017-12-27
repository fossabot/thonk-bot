

const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./cfg/config.json", "utf8"));
global.config = config
const respondFile = JSON.parse(fs.readFileSync('./cfg/responds.json', 'utf8'));
const talkedRecently = new Set();
const moji = require('moji-translate');

client.on('guildMemberAdd', function(member) {
  const guild = member.guild;
  member.guild.channels.find('topic', '-welcome-channel-').send(`Hello ${member}! Welcome to **${guild.name}**`)
})


client.on("ready", function() {
  console.log('Ready!');
  client.user.setGame('h.help');
})

client.on('message', (message) => {
  const args = message.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(respondFile[message.content]) {
    message.channel.send(respondFile[message.content])
  }

  try {
    if(!message.guild) return; //cuz we dont want dm
    if(message.author.bot || !message.content.startsWith(config.prefix)) return; //to prevent chaos and log spam happen
    if (talkedRecently.has(message.author.id)) return message.reply('u have to wait 3 seconds!!!111!');
    talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 3000);
    let cmdFile = require(`./cmd/${command}.js`);
    cmdFile.run(discord, client, message, args, moji);
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.BOT_TOKEN); 
 /**
  * hello im the wizard of reminder!
  remember to not show your bot token pls
  you can replace the env if you hosted on you local computer
  */


