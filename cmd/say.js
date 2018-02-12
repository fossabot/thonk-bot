module.exports = {
    name: 'say',
    info: 'hahahah pranked hahaha',
    args: true,
    usage: '<message to say>',
    ownerOnly: true,
    execute(message, args){
        message.delete()
        let messages = args.slice(0).join(" ")
        message.channel.send(messages)
    }
}