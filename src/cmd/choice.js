module.exports = {
    name: 'choice',
    info: '??? or ???',
    args: true,
    usage: '<choice 1> <choice 2>',
    execute(message, args) { //eslint-disable-line no-unused-vars
        const choice = [args[0], args[1]];
        const result = Math.floor((Math.random() * choice.length));
        message.channel.send(`I choose ${choice[result]}`);
    },
};