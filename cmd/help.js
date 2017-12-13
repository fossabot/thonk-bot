

exports.run = (discord, client, message, args) => {
    var help = new discord.RichEmbed()
          .setColor('ORANGE')
          .setAuthor('TRIGGEREDDDDDDDDDDDD', 'https://cdn.discordapp.com/avatars/371630201521569792/ccd89854391742d0a5adf43fbc813471.png')
          .setDescription('List of commands')
          .setFooter('there is also some stupid respond, go find it by yourself')
          .addField('t!help', 'ehhhhhh, O O F', true)
          .addField('t!ping', 'ping the bot to see if the bot is online', true)
          .addField('t!pony', 'play a FUCKING mlp theme song on a channel that you currently on.', true)
          .addField('t!cringe', 'show a random image that will cringe your ass', true)
          .addField('t!hot', 'type it', true)
          .addField('t!thicc', 'T H I C C & WITH STYLE', true)
          .addField('t!roll', 'roll a die', true)
      message.channel.send(help);
}