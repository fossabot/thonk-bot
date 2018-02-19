const db = require('quick.db');
const config = require('../cfg/config');
module.exports = {
    name: 'sell',
    info: 'sell a item in your inventory',
    args: true,
    usage: '<item ID>',
    execute(message, args) {
        // message.channel.send('Command is work in process')
        // disable
        const itemID = args[0];
        if(isNaN(itemID) || !config.items.price[itemID]) return message.channel.send('You entered an invalid item ID!');
        db.fetchArray(`inventory_${message.author.id}`).then(invFetched => {
            if(!invFetched.includes(itemID)) return message.channel.send('You don\'t have this item!');
            const index = invFetched.indexOf(itemID);
            if(invFetched > -1) {
                invFetched.splice(index, 1);
                let length = invFetched.length;
                while (length--) !/\S/.test(invFetched[length]) && invFetched.splice(length, 1);
                db.setArray(`inventory_${message.author.id}`, invFetched).then(newInv => {
                    db.updateValue(`balance_${message.author.id}`, config.items.price[itemID]).then(newBal => {
                        message.channel.send(`Successfully sell item id ${itemID}! \nYou now have $${newBal.value} \nHere's your current inventory: ${newInv}`);
                    });
                });
            }
        });
    },
};