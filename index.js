

const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json", "utf8"));


client.on("ready", function() {
  console.log('Ready!');
  client.user.setGame('t!help');
})

client.on('message', (message) => {
  if(!message.guild) return; //cuz we dont want dm
  if(message.author.bot || !message.content.startsWith(config.prefix)); //to prevent chaos happen
  const args = message.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  try {
    let cmdFile = require(`./cmd/${command}.js`);
    cmdFile.run(discord, client, message, args);
  } catch (err) {
    console.error(err);
  }

  if (message.content.startsWith('kys')) {
    message.reply('fucking bitch stop being a faggot.')
  }

  if (message.content.startsWith('roblox')) {
    message.reply('it just a fucking lego copy you cunt.')
  }

  if(message.content.startsWith('mtr')) {
    message.reply(`can't find respond "mtr", you mean kcr?`)
  } 

  if(message.content.startsWith('wat')) {
    message.reply('next time think twice before you type pls')
  }

  if(message.content.startsWith('kms')) {
    message.reply({file: "https://cdn.discordapp.com/attachments/372799355385675777/390844751722708992/kms.png"})
  }
});


client.login(process.env.BOT_TOKEN); //make the bot appear
//process.env.BOT_TOKEN

