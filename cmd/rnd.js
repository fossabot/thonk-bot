exports.run = (discord, client, message, args) => {
    let [min, max] = args;
    let rand = Math.floor(Math.random() * max) + min
    message.channel.send(`Generated integer ${rand}`)
}