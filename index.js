

const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
const talkedRecently = new Set();

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
});


client.login(process.env.BOT_TOKEN); //make the bot appear
//process.env.BOT_TOKEN

