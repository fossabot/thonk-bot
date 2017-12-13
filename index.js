const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json", "utf8"));


client.on("ready", function() {
  console.log('Ready!');
  client.user.setGame('t!help')
})

client.on('message', (message) => {
  if(!message.guild) return; //cuz we dont want dm
  if(message.author.bot || !message.content.startsWith(config.prefix)); //to prevent chaos happen
  const args = message.content.slice(config.prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

    if(message.content == 'kys') {
      message.reply('Alright, thats really rude.');
    }

    if(message.content == 'whos the best pony?') {
      message.reply('Celestia is da best pony!!/!!!!!');
    }

    if(cmd === 'help') {
      var help = new discord.RichEmbed()
          .setColor('ORANGE')
          .setAuthor('TRIGGEREDDDDDDDDDDDD', 'https://cdn.discordapp.com/avatars/371630201521569792/ccd89854391742d0a5adf43fbc813471.png')
          .setDescription('List of commands')
          .setFooter('there is also some stupid respond, go find it by yourself')
          .addField('t!help', 'ehhhhhh', true)
          .addField('t!pony', 'play a FUCKING mlp theme song on a channel that you currently on.', true)
          .addField('t!cringe', 'show a random image that will cringe your ass', true)
          .addField('t!hot', 'type it', true)
          .addField('t!thicc', 'T H I C C & WITH STYLE', true)
          .addField('t!roll', 'roll a die', true)
      message.channel.send(help)
    }

    if(cmd == 'pony') {
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>{
        const dispatcher = connection.playFile('./media/shit.mp3') //this is a fucking mlp theme song if you wondering
        dispatcher.on("end", end => {
          voiceChannel.leave();
        })
      })
        }
        if(cmd === 'cringe') {
          var fs = require('fs');
          var cringe = fs.readFileSync('cringe.txt').toString().split("\n");
          var rnd = Math.floor(Math.random() * 21);
          message.channel.send(cringe[rnd]);
        }

        if(cmd === 'hot') {
          message.channel.send('OMFG SO FUCKING HOTOTOTOTOTO JINFASDJKLFASJKLADSJADJ - <@161973479858503680>');
        }

        if(cmd === 'thicc') {
          message.channel.send('https://gfycat.com/AnnualMediocreJumpingbean')
        }

        if(message.content.startsWith('roblox')) {
          message.reply('it just a fucking lego copy you cunt')
        }

        if(cmd === 'roll') {
          var rollrnd = Math.floor(Math.random() * 6) + 1
          message.channel.send(message.author + ' rolled a ' + '`' + rollrnd + '`' + '!')
        }
      })


client.login(process.env.BOT_TOKEN); //make the bot appear
//process.env.BOT_TOKEN

