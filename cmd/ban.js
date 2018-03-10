const discord = require('discord.js');
const db = require('quick.db');
module.exports = {
    name: 'ban',
    info: 'Ban a user mentioned',
    args: true,
    usage: '<user mentioned> [reason]',
    guildOnly: true,
    async execute (message, args) { 
        const toBan = message.guild.member(message.mentions.users.first());
        const reason = args.slice(1).join(' ');
        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) return message.reply('you don\'t have permission to use this command!');
        if (toBan === message.author) return message.reply('why you\'re trying to ban yourself?');
        if (message.guild.member(message.author).roles.position <= toBan.roles.position) return message.reply('you can\'t ban a member who is higher or has the same role as you!');
        if (reason) {
            await toBan.ban(reason);
            await message.delete();
            await message.reply(`<:tick:412529951238258688> ${toBan} is banned! Reason: ${reason}`);
            const embed = new discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setTitle('A member is banned!')
            .setDescription(`**Username :** ${toBan}\n**Reason :${reason}**`);
            db.fetch(`modChannel_${message.guild.id}`).then(i => {
                if (!i || i === 'none') return console.log('a guild didn\'t set a moderation chaheane');
            message.guild.channels.get(i).send(embed);
            });
            return;
        } else if (!reason) {
            await toBan.ban();
            await message.delete();
            await message.reply(`<:tick:412529951238258688> ${toBan} is banned! Reason: **No reason provided!**`);
            const embed = new discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setTitle('A member is banned!')
            .setDescription(`**Username :** ${toBan}\n**Reason :${reason}**`);
            db.fetch(`modChannel_${message.guild.id}`).then(i => {
                if (!i || i === 'none') return console.log('a guild didn\'t set a moderation chaheane');
            message.guild.channels.get(i).send(embed);
            return;
        });
    }
},
};