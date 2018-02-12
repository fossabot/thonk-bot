const db = require('quick.db')
exports.run = (client, member) => {
    db.fetchObject(`messageChannel_${member.guild.id}`).then(i => {
        if (!member.guild.channels.get(i.text)) return console.log('a guild still didn\'t fucking set a welcome / leave channel')
        db.fetchObject(`leaveMessage_${member.guild.id}`).then(o => {
            if (!o.text) console.log('GFDGFDGFDFGD')
            else member.guild.channels.get(i.text).send(o.text.replace('{user}', member.user.username).replace('{server}', member.guild.name).replace('{members}', member.guild.memberCount))
        })
    })
}