module.exports = {
    name: 'roll',
    info: 'roll a die',
    execute(message, args) { //eslint-disable-line no-unused-vars
        const rollrnd = Math.floor(Math.random() * 6) + 1;
        message.channel.send(message.author + ' rolled a ' + '`' + rollrnd + '`' + '!');
    },
};