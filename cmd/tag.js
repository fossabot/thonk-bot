const db = require('quick.db')
const discord = require('discord.js')
module.exports = {
    name: 'tag',
    info: 'view a tag created by others',
    args: true,
    usage: '<tag name>',
    execute(message, args){
        let name = args[0]
        db.fetchObject(`tag_${name}`).then(i => {
            if (!i.text) return message.channel.send('The tag does not exist!')
                else {
                    var embed = new discord.RichEmbed()
                        .setColor(`RANDOM`)
                        .setDescription(`**Tag name**: ${name}\n\n**Content**: ${i.text}`)
                    message.channel.send(embed)
                }
        })
    }
}