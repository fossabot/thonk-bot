const db = require('quick.db');
const config = require('../cfg/config')
module.exports = {
    name: 'sell',
    info: 'sell a item in your inventory',
    args: true,
    usage: '<item ID>',
    execute(message, args) {
        message.channel.send('Command is work in process')
        // disable
        // let itemID = args[0]
        // if(isNaN(itemID) || !config.items.price[itemID]) return message.channel.send('You entered an invalid item ID!');
        // db.fetchArray(`inventory_${message.author.id}`).then(i => {
        //     if(!i.includes(itemID)) return message.channel.send('You don\'t have this item!');
        //         let newInv = i.splice((itemID - 1), 1)
        //         db.setArray(`inventory_${message.author.id}`, newInv).then(o => {
        //             db.updateValue(`balance_${message.author.id}`, config.items.price[itemID]).then(p => {
        //                 message.channel.send(`**Successfully sell item ID ${itemID}** \nYou now have: $${p.value} and this following items (in IDs): ${o.join(", ")}`)
        //             })
        //         })
        // })
    }
}