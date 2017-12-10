const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
const fs = require('fs');

client.on('message', (message) => {
  if(!message.guild) return; //cuz we dont want dm
    if(message.content == 'kys') {
      message.reply('Alright, thats really rude.');
    }

    if(message.content == 'whos the best pony?') {
      message.reply('Celestia is da best pony!!/!!!!!');
    }
    if(message.content == '!pony') {
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>{
        const dispatcher = connection.playFile('./media/shit.mp3') //this is a fucking mlp theme song if you wondering
        message.reply('Cancer activated, type !pony again to cancel');
        dispatcher.on("end", end => {
          voiceChannel.leave();
        })
      })
        }
        if(message.content == '!cringe') {
          var fs = require('fs');
          var cringe = fs.readFileSync('cringe.txt').toString().split("\n");
          var rnd = Math.floor(Math.random() * 9);
          message.channel.send(cringe[rnd]);
        }
      })


client.login(process.env.BOT_TOKEN); //make the bot appear
//process.env.BOT_TOKEN
