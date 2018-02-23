module.exports = {
    name: 'prune',
    info: 'prune a bulk of messages',
    args: true,
    guildOnly: true,
    usage: '<number from 2 - 100>',
    aliases: ['pruge', 'bulkdelete', 'massdelete'],
    execute(message, args) {
        const num = args[0];
        if (isNaN(num)) {
            return message.reply('that\'s not a number.');
        } else if (num < 2 || num > 100) {
            return message.reply('please enter a number between 2 and 100');
        } else if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you don\'t have permission to use this command!'); //eslint-disable-line curly

        message.channel.bulkDelete(num, true);
    },
};