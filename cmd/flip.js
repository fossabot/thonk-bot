const db = require('quick.db');
module.exports = {
    name: 'flip',
    info: 'flip a coin',
    usage: '<dollars to bet> <tails / heads>',
    args: true,
    execute (message, args) {
        let [toBet, tailsHeads] = args; //eslint-disable-line prefer-const
        tailsHeads = tailsHeads.toLowerCase();
        const replies = ['heads', 'tails'];
        const result = Math.floor((Math.random() * replies.length));
        if (toBet < 0 || toBet === 0 || isNaN(toBet)) return message.channel.send('You bet an invaild amount of dollar!');
        if (!replies.includes(tailsHeads)) return message.channel.send('Please bet with tails / heads!');
        db.fetchObject(`balance_${message.author.id}`).then(i => {
            if (toBet > i.value || i.value < toBet) return message.channel.send('You don\'t have enough money to bet!');
            if (tailsHeads != replies[result]) {
                db.updateValue(`balance_${message.author.id}`, -toBet).then(o => {
                message.channel.send(`You lose! \n**You was betting**: ${toBet} \nBut the result is ${replies[result]} \nYou now have: ${o.value}`);
            });
            } else {
                db.updateValue(`balance_${message.author.id}`, toBet).then(p => {
                    message.channel.send(`You won! You flipped: ${replies[result]} \n\nYou now have: $${p.value}`);
                });
            }
        });
    },
};