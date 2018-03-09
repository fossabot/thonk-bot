const db = require('quick.db');
const config = require('../cfg/config');
module.exports = {
    name: 'giveme',
    info: 'give yourself money hahaha hax lol xdd \:moneybag:\:moneybag:\:moneybag:', //eslint-disable-line no-useless-escape
    args: true,
    ownerOnly: true,
    usage: '<dollars to give>',
    execute(message, args) {
        const toGive = parseInt(args[0]);
        if (isNaN(toGive) || toGive > 1e+10) return message.channel.send(`${toGive} is not a number!`);
        db.fetch(`balance_${message.author.id}`).then(i => {
            db.add(`balance_${message.author.id}`, toGive).then(o => {
                message.channel.send(`**Successfully updated your balance from ${i} to ${o} Happy debugging!!!**`);
            });
        });
    },
};