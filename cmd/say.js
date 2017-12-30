module.exports = {
    name: 'say',
    info: 'make the bot say something',
    args: true,
    usage: '<message to say>',
    ownerOnly: true,
    execute(message, args){
        let messages = args.slice(0).join(" ")
        message.channel.send(messages)
    }
}