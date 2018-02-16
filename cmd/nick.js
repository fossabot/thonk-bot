module.exports = {
    name: 'nick',
    info: 'change the nick of this bot!',
    args: true,
    usage: '<nick to change>',
    execute(message, args) {
        let nick = args.slice(0).join(" ")
        if (!message.member.hasPermission('CHANGE_NICKNAME')) return message.channel.send('**You** don\'t have permission to use this command!');

        message.guild.members.get(client.user.id).setNickname(nick).then(n => {
            message.channel.send(`**Successfully changed nickname to: ** *${nick}*`)
        })
    }
}