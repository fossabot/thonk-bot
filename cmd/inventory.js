const db = require('quick.db');
module.exports = {
    name: 'inventory',
    info: 'check your inventory',
    aliases: ['i', 'inv'],
    execute(message, args) {
        db.fetchArray(`inventory_${message.author.id}`).then(i => {
            let length = i.length;
            while (length--) !/\S/.test(i[length]) && i.splice(length, 1);
            db.setArray(`inventory_${message.author.id}`, i).then(newI => { //this fix whitespace array
                message.channel.send(`You have these following items (in IDs): ${i}`)
            })

        })
    }
}