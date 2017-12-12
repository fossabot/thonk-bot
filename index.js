const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json", "utf8"));


client.on("ready", function() {
  console.log('Ready! Logged as ${bot.user.tag} pn ${bot.guilds.size} servers');
  client.user.setGame('t!help | ${bot.guilds.size} servers')
})

client.on('message', (message) => {
  if(!message.guild) return; //cuz we dont want dm
  if(message.author.bot || !msg.content.startsWith(config.prefix)); //to prevent chaos happen
  const args = message.content.slice(cfg.prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

    if(message.content == 'kys') {
      message.reply('Alright, thats really rude.');
    }

    if(message.content == 'whos the best pony?') {
      message.reply('Celestia is da best pony!!/!!!!!');
    }

    if(message.content == config.prefix + 'help') {
      message.reply('im too lazy to make one so https://hastebin.com/egubenobey.scala');
    }

    if(message.content == config.prefix + 'pony') {
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>{
        const dispatcher = connection.playFile('./media/shit.mp3') //this is a fucking mlp theme song if you wondering
        message.reply('Cancer activated, type !pony again to cancel');
        dispatcher.on("end", end => {
          voiceChannel.leave();
        })
      })
        }
        if(message.content == config.prefix + 'cringe') {
          var fs = require('fs');
          var cringe = fs.readFileSync('cringe.txt').toString().split("\n");
          var rnd = Math.floor(Math.random() * 21);
          message.channel.send(cringe[rnd]);
        }

        if(message.content == config.prefix + 'hot') {
          message.channel.send('OMFG SO FUCKING HOTOTOTOTOTO JINFASDJKLFASJKLADSJADJ - <@161973479858503680>');
        }

        if(message.content == config.prefix + 'asciiart') {

        }
      })


client.login(process.env.BOT_TOKEN); //make the bot appear
//process.env.BOT_TOKEN

