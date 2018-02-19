const db = require('quick.db');
module.exports = {
    name: 'giveme',
    info: 'give yourself money hahaha hax lol xdd \:moneybag:\:moneybag:\:moneybag:', //eslint-disable-line no-useless-escape
    args: true,
    ownerOnly: true,
    usage: '<dollars to give>',
    execute(message, args) {
        const toGive = args[0];
        if (isNaN(toGive)) return message.channel.send(`${toGive} is not a number!`);
        db.fetchValue(`balance_${message.author.id}`).then(i => {
            db.updateValue(`balance_${message.author.id}`, toGive).then(o => {
                message.channel.send(`**Successfully updated your balance from ${i.value} to ${o.value} Happy debugging!!!**`);
            });
        });
    },
};