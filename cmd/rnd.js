exports.run = (discord, client, message, args) => {
    var [min, max] = args;
    var rand = Math.floor(Math.random() * max);
    var sum = parseFloat(rand) + parseFloat(min);
    if (!min || !max) return message.reply('Invalid Usage, please do `t!roll <min num> <max num>`');
    message.channel.send("Generated integer " + '`' + sum + '`')
}