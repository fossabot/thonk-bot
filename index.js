const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
const fs = require('fs');

function mariotakingshit() {
  message.channel.send(cuntmario[0]);
  message.channel.send(cuntmario[1]);
  message.channel.send(cuntmario[2]);
  message.channel.send(cuntmario[3]);
  message.channel.send(cuntmario[4]);
  message.channel.send(cuntmario[5]);
  message.channel.send(cuntmario[6]);
  message.channel.send(cuntmario[7]);
  message.channel.send(cuntmario[8]);
  message.channel.send(cuntmario[9]);
  message.channel.send(cuntmario[10]);
  message.channel.send(cuntmario[11]);
  message.channel.send(cuntmario[12]);
}
client.on('message', (message) => {
  if(!message.guild) return; //cuz we dont want dm
    if(message.content == 'kys') {
      message.reply('Alright, thats really rude.');
    }

    if(message.content == 'whos the best pony?') {
      message.reply('Celestia is da best pony!!/!!!!!');
    }

    if(message.content == '!mario') {
      var cuntmario = [
        "░░░░░░░░░▓▓▓▓▀█░░░░░░░░░░░░░",
        "░░░░░░▄▀▓▓▄██████▄ ",
        "░░░░░▄█▄█▀░░▄░▄░█▀",
        "░░░░▄▀░██▄░░▀░▀░▀▄ ",
        "░░░░▀▄░░▀░▄█▄▄░░▄█▄ ",
        "░░░░░░▀█▄▄░░▀▀▀█▀ ",
        "░░░░░░█░░░░░░░░▄▀▀░▐",
        "░░░░▄▀░░░░░░░░▐░▄▄▀ ",
        "░░▄▀░░░▐░░░░░█▄▀░▐ ",
        "░░█░░░▐░░░░░░░░▄░█ ",
        "░░░█▄░░▀▄░░░░▄▀▐░█ ",
        "░░░█▐▀▀▀░▀▀▀▀░░▐░█ ",
        "░░▐█▐▄░░▀░░░░░░▐░█▄▄",
        "░░░▀▀░GOTCHA░░░░▐▄▄▄▀"
      ]
      setTimeout(mariotakingshit, 3000);
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

      })


client.login(process.env.BOT_TOKEN); //make the bot appear
//
