const db = require('quick.db');
module.exports = {
    name: 'kick',
    info: 'kick a member',
    guildOnly: true,
    args: true,
    usage: '<mention or username>',
    async execute (message, args) {
        const toKick = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason = args.slice(1).join(' ');
        if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) return message.reply('you don\'t have permission to use this command!');
        !reason ? reason = '**No reason provided!**' : reason;
        if (toKick === message.author) return message.channel.send('Don\'t kick yourself thx');
        if (message.guild.member(message.author).roles.position <= toKick.roles.position) return message.reply('you can\'t kick a member who is higher or has the same role as you!');
        await toKick.kick(reason);
        await message.delete();
        await message.channel.send(`<:tick:412529951238258688> **Successfully kicked ${toKick.user.tag}**`);
        const embed = new discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setTitle('A member is kicked!')
            .setDescription(`**Username :** ${toKick.user.username}\n**Reason :** ${reason}`);
        db.fetch(`modChannel_${message.guild.id}`).then(i => {
            if (!i || i === 'none') return console.log('a guild didn\'t set a moderation chaheane');
        message.guild.channels.get(i).send(embed);
        });
    },
};