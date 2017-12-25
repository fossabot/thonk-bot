exports.run = (discord, client, message, args) => {
    let num = args[0];
    if (isNaN(num)) {
        return message.reply('that\'s not a number.')
    } else if (num < 2 || num > 100) {
        return message.reply('please enter a number between 2 and 100')
    } else if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) {
        return message.reply('I don\'t have these following permission: `MANAGE_MESSAGES`')
    }

    message.channel.bulkDelete(num, true)
}