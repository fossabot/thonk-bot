const db = require('quick.db')
module.exports = {
    name: 'tag',
    info: 'view a tag created by others',
    args: true,
    usage: '<tag name>',
    execute(message, args){
        let name = args[0]
        db.fetchObject(`tag_${name}`).then(i => {
            if (!i.text) return message.channel.send('The tag does not exist!')
                else message.channel.send(i.text)
        })
    }
}