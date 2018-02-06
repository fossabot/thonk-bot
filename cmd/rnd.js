module.exports = {
    name: 'rnd',
    info: 'generate a random number',
    args: 'true',
    usage: '<min> <max>',
    aliases: ['random'],
    execute(message, args){
        var [min, max] = args;
        var rand = Math.floor(Math.random() * max);
        var sum = parseFloat(rand) + parseFloat(min);
        message.channel.send(`Number: \`${sum}\``)
    }
}