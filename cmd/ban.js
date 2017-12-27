exports.run = async (discord, client, message, args) => {
    let toBan = message.guild.member(message.mentions.users.first());
    if (!message.member.roles.some(r=>["ADMINISTRATOR"].includes(r.name))) return message.reply('you don\'t have permission to use this command!')
    if (!toBan) return message.reply('you did\'t specify a user to ban!')
    if (toBan === message.author.id) return message.reply('why you\'re trying to ban yourself?')
    if (!toBan.bannable) return message.reply('you can\'t ban this user!')
    await toBan.ban()
}