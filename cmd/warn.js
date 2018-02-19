const discord = require('discord.js');
const db = require('quick.db');
module.exports = {
    name: 'warn',
    info: 'issue a *friendly* warning to a mentioned user',
    args: true,
    usage: '<user mentioned> <reason>',
    guildOnly: true,
    execute(message, args) {
        const toWarn = message.guild.member(message.mentions.users.first());
        const reason = args.slice(1).join(' ');
        if (!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.reply('you don\'t have permission to use this command!');
        if (toWarn === message.author) return message.reply('why you\'re trying to warn yourself?');
        if (!reason) return message.reply('you didn\'t provide a reason to warn this user!');
        if (message.guild.member(message.author).roles.position <= toWarn.roles.position) return message.reply('you can\'t warn a member who is higher or has the same role as you!');
        toWarn.send(`You have been warned in **${message.guild.name}** by **${message.author.username}** \n**Reason**: ${reason}`);
        message.channel.send(`✅ **${toWarn.user.username} is warned**`);
        const embed = new discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setTitle('A member is warned!')
            .setDescription(`**Username :** ${toWarn}\n**Reason :${reason}**`);
        db.fetchObject(`modChannel_${message.guild.id}`).then(i => {
            if (!i || i === 'none') return console.log('a guild didn\'t set a moderation chaheane');
            message.guild.channels.get(i.text).send(embed);
        });
    },
};