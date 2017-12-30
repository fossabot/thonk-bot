module.exports = {
    name: 'avatar',
    info: 'Show a avatar of a user',
    usage: '<user>',
    aliases: ['icon', 'pfp'],
    execute(message, args) {
        let user = message.mentions.users.first();
        if (!user) user = message.author
        message.channel.send('Here\'s yo avatar that you requested: ', {files: [
            {
                attachment: user.displayAvatarURL,
                name: message.author.id + ".png"
            }
        ]})
    
    }
}