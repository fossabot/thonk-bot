exports.run = (discord, client, message, args) => {
    var rollrnd = Math.floor(Math.random() * 6) + 1
    message.channel.send(message.author + ' rolled a ' + '`' + rollrnd + '`' + '!')
}