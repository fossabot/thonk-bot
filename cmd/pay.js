const db = require('quick.db');
module.exports = {
    name: 'pay',
    info: 'give dollars to a user mentioned',
    args: true,
    usage: '<@user> <dollars>',
    guildOnly: true,
    execute (message, args) {
        const toUser = message.guild.member(message.mentions.users.first());
        const toPayAmount = args[1];
        if (isNaN(toPayAmount)) return message.channel.send('${toPay} is not a number!');
        if (message.author.id === toUser.id) return message.channel.send('You can\'t pay to yourself!');
        if (toPayAmount < 0) return message.channel.send('You can\'t pay negative amount to a user!');
        db.fetch(`balance_${message.author.id}`).then(i => {
            if (toPayAmount > i) return message.channel.send('You don\'t have enough money to pay!');
            db.subtract(`balance_${message.author.id}`, parseInt(toPayAmount)).then(o => {
                db.add(`balance_${toUser.id}`, parseInt(toPayAmount)).then(() => {
                    message.channel.send(`Successfully paid **$${toPayAmount}** to **${toUser.user.username}**! \nYou now have: $${o}`);
                });
            });
        });
    },
};