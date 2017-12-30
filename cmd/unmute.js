const discord = require('discord.js')
const client = new discord.Client();
module.exports = {
    name: "unmute",
    info: "unmute a mentioned user that is muted",
    args: true,
    guildOnly: true,
    usage: "h.unmute <mentioned user> [reason]",
    async execute (message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('you don\'t have permission to use this command!')
        let toUnMute = message.guild.member(message.mentions.users.first());
        let role = message.guild.roles.find(r => r.name === "h.mute");
        const reason = args.slice(1).join(' ')
        if (!role || !toUnMute.roles.has(role.id))  return message.reply('this user is not muted!')
        await toUnMute.removeRole(role);
        message.reply(`${toUnMute} has been unmuted!`)
        if (!message.guild.channels.find('topic', '-mod-log-')) return message.reply('Seems there\'s no mod log channel, I recommend you add a mod-log by adding `-mod-log-` as topic in your decided channel')
        var embed = new discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setTitle('A member is muted!')
            .setDescription(`\n **Username**: ${toUnMute} \n**Reason**: ${reason}`)
            .setColor('GREY')
        message.guild.channels.find('topic', '-mod-log-').send(embed)
        return
    }
}