const db = require('quick.db');
module.exports = {
    name: 'inventory',
    info: 'check your inventory',
    aliases: ['i', 'inv'],
    execute(message, args) {
        db.fetchArray(`inventory_${message.author.id}`).then(i => {
            message.channel.send(`You have these following items (in IDs): ${i}`)
        })
    }
}