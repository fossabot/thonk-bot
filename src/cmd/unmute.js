const discord = require('discord.js');
const db = require('quick.db');
module.exports = {
    name: 'unmute',
    info: 'unmute a mentioned user that is muted',
    args: true,
    guildOnly: true,
    usage: '<mentioned user> [reason]',
    async execute (message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you don\'t have permission to use this command!');
        const toUnMute = message.guild.member(message.mentions.users.first());
        const role = message.guild.roles.find(r => r.name === 'thonk mute');
        const reason = args.slice(1).join(' ');
        if (!role || !toUnMute.roles.has(role.id)) {return message.reply('this user is not muted!');}
        await toUnMute.removeRole(role);
        message.channel.send(`✅ ${toUnMute} has been unmuted!`);
        const embed = new discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setTitle('A member is muted!')
            .setDescription(`\n **Username**: ${toUnMute} \n**Reason**: ${reason}`)
            .setColor('GREY');
        db.fetchObject(`modChannel_${message.guild.id}`).then(i => {
            if (!i || i === 'none') return console.log('a guild didn\'t set a moderation chaheane');
            message.guild.channels.get(i.text).send(embed);
        });
        return;
    },
};