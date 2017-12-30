const discord = require('discord.js')
module.exports = {
    name: 'warn',
    info: 'issue a *friendly* warning to a mentioned user',
    args: true,
    usage: 'h.warn <user mentioned> <reason>',
    guildOnly: true,
    execute(message, args) {
        let toWarn = message.guild.member(message.mentions.users.first())
        const reason = args.slice(1).join(' ')
        if (!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.reply('you don\'t have permission to use this command!');
        if (!toWarn) return message.reply('you did\'t specify a user to warn!');
        if (toWarn === message.author) return message.reply('why you\'re trying to warn yourself?');
        if (!reason) return message.reply('you didn\'t provide a reason to warn this user!')
        if (message.guild.member(message.author).roles.position <= toWarn.roles.position) return message.reply('you can\'t warn a member who is higher or has the same role as you!');
        toWarn.send(`You have been warned in **${message.guild.name}** by **${message.author.username}** \n**Reason**: ${reason}`);
        if (!message.guild.channels.find('topic', '-mod-log-')) return message.reply('Seems there\'s no mod log channel, I recommend you add a mod-log by adding `-mod-log-` as topic in your decided channel')
        var embed = new discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setTitle('A member is warned!')
            .setDescription(`**Username :** ${toWarn}\n**Reason :${reason}**`)
        message.guild.channels.find('topic', '-mod-log-').send(embed)
    }
}