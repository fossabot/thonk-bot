module.exports = {
    name: 'rnd',
    info: 'generate a random number',
    args: 'true',
    usage: '<min> <max>',
    aliases: ['random'],
    execute(message, args) {
        const [min, max] = args;
        const rand = Math.floor(Math.random() * max);
        const sum = parseFloat(rand) + parseFloat(min);
        message.channel.send(`Number: \`${sum}\``);
    },
};