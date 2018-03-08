const db = require('quick.db');
module.exports = {
    name: 'addchanges',
    info: 'add something to changelogs',
    ownerOnly: true,
    args: true,
    usage: '<description of changes>',
    execute (message, args) {
        if (args[0] != '{clean}') db.push('changelogs', args.join(' ')).then(() => {
            message.channel.send('**Successfully updated changelog**');
        });
        else db.set(`changelogs`, []).then(() => {
            message.channel.send('**Successfully cleaned changelog**');
        });
    },
};