const db = require('quick.db')
module.exports = {
    name: 'pay',
    info: 'give dollars to a user mentioned',
    args: true,
    usage: '<@user> <dollars>',
    guildOnly: true,
    execute (message, args) {
        let toUser = message.guild.member(message.mentions.users.first());
        let toPayAmount = args[1];
        if (isNaN(toPayAmount)) return message.channel.send(`${toPay} is not a number!`);
        if (message.author.id === toUser.id) return message.channel.send(`You can\'t pay to yourself!`);
        db.fetchObject(`balance_${message.author.id}`).then(i => {
            if (toPayAmount > i.value) return message.channel.send('You don\'t have enough money to pay!');
            db.updateValue(`balance_${message.author.id}`, -toPayAmount).then(o => {
                db.updateValue(`balance_${toUser.id}`, toPayAmount).then(p => {
                    message.channel.send(`Successfully paid **$${toPayAmount}** to **${toUser.user.username}**! \nYou now have: $${o.value}`)
                })
            })
        })
    }
}