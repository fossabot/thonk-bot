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
        if (args[0] == 'wipe') {
            if (message.author.id !== config.ownerID) return;
            db.fetch(`balance_${message.mentions.users.first().id}`).then(b => {
                db.subtract(`balance_${message.mentions.users.first().id}`, toGive).then(a => {
                    message.channel.send('nice meme m8');
                    message.mentions.users.first().send('lololololool bitch your monei just wiped by our glorious bot owner hahahaha abuser lololo rekt');
                });
            });
            return;
        }
        if (isNaN(toGive)) return message.channel.send(`${toGive} is not a number!`);
        db.fetch(`balance_${message.author.id}`).then(i => {
            db.add(`balance_${message.author.id}`, toGive).then(o => {
                message.channel.send(`**Successfully updated your balance from ${i} to ${o} Happy debugging!!!**`);
            });
        });
    },
};