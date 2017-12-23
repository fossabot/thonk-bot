

const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./cfg/config.json", "utf8"));
global.config = config
const respondFile = JSON.parse(fs.readFileSync('./cfg/responds.json', 'utf8'));


client.on("ready", function() {
  console.log('Ready!');
  client.user.setGame('t!help');
})

client.on('message', (message) => {
  if(!message.guild) return; //cuz we dont want dm
  if(message.author.bot || !message.content.startsWith(config.prefix)) return; //to prevent chaos and log spam happen
  const args = message.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(respondFile[message.content]) {
    message.channel.send(respondFile[message.content])
  }

  try {
    let cmdFile = require(`./cmd/${command}.js`);
    cmdFile.run(discord, client, message, args);
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


