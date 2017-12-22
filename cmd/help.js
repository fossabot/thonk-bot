

exports.run = (discord, client, message, args) => {
    var help1 = new discord.RichEmbed()
          .setColor([139, 69, 19])
          .setAuthor('Hitler', 'https://cdn.discordapp.com/avatars/386818562796290050/d41c101b6fa7abd7a014c90fb73ad23b.png')
          .setDescription('List of commands')
          .setFooter('there is also some stupid respond, go find it by yourself')
          .addField('t!help', 'ehhhhhh', true)
          .addField('t!ping', 'ping the bot to see if the bot is online', true)
          .addField('t!pony', 'play a FUCKING mlp theme song on a channel that you currently on.', true)
          .addField('t!cringe', 'show a random image that will cringe your ass', true)
          .addField('t!hot', 'type it', true)
          .addField('t!thicc', 'T H I C C & WITH STYLE', true)
          .addField('t!roll', 'roll a die', true)
          .addField('t!rnd', 'generate a random integer. Usage: `t!rnd <min> <max>`')
          .addField('t!ryandrawing', "show ryan's drawing", true)
          .addField('t!cat', 'show a random cat image')
          .addField('Bot owner only', 't!eval t!ping cleverbot')
      message.reply('I sent you a telegram')
      message.author.sendMessage(help1)
}