const discord = require('discord.js')
const client = new discord.Client();
module.exports = {
    name: 'ban',
    info: 'Ban a user mentioned',
    args: true,
    usage: "<user mentioned> [reason]",
    guildOnly: true,
    async execute (message, args) {
        const toBan = message.guild.member(message.mentions.users.first());
        const reason = args.slice(1).join(' ')
        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) return message.reply('you don\'t have permission to use this command!');
        if (toBan === message.author) return message.reply('why you\'re trying to ban yourself?');
        if (message.guild.member(message.author).roles.position <= toBan.roles.position) return message.reply('you can\'t ban a member who is higher or has the same role as you!');
        if (!message.guild.channels.find('topic', '-mod-log-')) message.reply('Seems there\'s no mod log channel, I recommend you add a mod-log by adding `-mod-log-` as topic in your decided channel')
        if (reason) {
            await toBan.ban(reason)
            await message.delete();
            await message.reply(`${toBan} is banned! Reason: ${reason}`)
        } else if (!reason) {
            await toBan.ban();
            await message.delete();
            await message.reply(`${toBan} is banned! Reason: **No reason provided!**`)
        }
    }
}