exports.run = async (discord, client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('you don\'t have permission to use this command!')
    let toUnMute = message.guild.member(message.mentions.users.first());
    if (!toUnMute) return message.reply('you did\'t specify a user to unmute!')
    let role = message.guild.roles.find(r => r.name === "h.mute");

    if (!role || !toUnMute.roles.has(role.id))  return message.reply('this user is not muted!')
    await toUnMute.removeRole(role);
    message.reply(`${toUnMute} has been unmuted!`)
    return
}
