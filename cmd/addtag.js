const db = require('quick.db')
module.exports = {
    name: 'addtag',
    info: 'add a tag',
    args: 'true',
    usage: '<tag name> <content>',
    execute(message, args){
        let name = args[0]
        let content = args.slice(1).join(" ")
        db.fetchObject(`tag_${name}`).then(i => {
            if(i.text === name) return message.channel.send('The tag\'s name is already claimed!')
                else if (!content) return message.channel.send('Please provide content!')
                    else {
                        db.updateText(`tag_${name}`, content).then(i => {
                            message.channel.send(`Successfully added tag ${name}`)
                        })
                    }
        })
    }
}