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
      const voiceChannel = message.member.voiceChannel;
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join();
        const dispatcher = connection.playArbitraryInput('https://my.mixtape.moe/ustawp.mp3');
        dispatch.on('end', () => {
          dispatcher.end();
          voiceChannel.leave();
        }
      }
    }
});

client.login(process.env.BOT_TOKEN); //make the bot appear
