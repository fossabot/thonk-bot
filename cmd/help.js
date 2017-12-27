

exports.run = (discord, client, message, args) => {
        var help = new discord.RichEmbed()
            .setColor([139, 69, 19])
            .setAuthor('Hitler', 'https://cdn.discordapp.com/avatars/386818562796290050/d41c101b6fa7abd7a014c90fb73ad23b.png')
            .setDescription('List of commands (Page 1)')
            .setFooter('there is also some stupid respond, go find it by yourself')
            .addField('h.help', 'ehhhhhh', true)
            .addField('h.ping', 'ping the bot to see if the bot is online', true)
            .addField('h.pony', 'play a FUCKING mlp theme song on a channel that you currently on.', true)
            .addField('h.cringe', 'show a random image that will cringe your ass', true)
            .addField('h.hot', 'type it', true)
            .addField('h.thicc', 'T H I C C & WITH STYLE', true)
            .addField('h.roll', 'roll a die', true)
            .addField('h.rnd', 'generate a random number. (Usage: `h.rnd <min> <max>`)', true)
            .addField('h.ryandrawing', "show ryan's drawing", true)
            .addField('h.cat', 'show a random cat image', true)
            .addField('h.prune', 'Delete a bulk of message (Usage: `h.prune <num from 2-100>`)')
            .addField('Bot owner only', 'h.eval h.ping cleverbot')
      message.reply('I sent you a telegram')
      message.author.send(help)
}