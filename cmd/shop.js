const db = require('quick.db');
const discord = require('discord.js');
const moment = require('moment');
const config = require('../cfg/config')
module.exports = {
    name: "shop",
    info: "show the items of the shop ,you can buy or sell items via this command.",
    usage: '[item id] [sell]',
    execute(message, args) {
        let itemID = args[0]
        let sellOrNo = args[1]
        if (!itemID) {
            let shopList = new discord.RichEmbed() //This following here is hard-coded, you must set it by your own. I'll try make a configurable items list soon.
                .setAuthor("Items list")
                .setFooter("Thonking bot", 'https://cdn.discordapp.com/avatars/412516192406732811/8519f2784c94a9664390a68ef1a4c3d7.png')
                .addField('Reactions: \:kissing: ', 'React with a emoji everytime you send a message! (Put "/r" end of your message to make the bot react)', false)
                .addField('Broken Thumb <:broken_thumb:357315026283134976>', '**ID: 1 Price: $1500**', true)
                .addField('L I T Joy <:wow:377430402585067521>', '**ID: 2 Price: $5000**', true)
            message.channel.send(shopList)
        } else {
            if(isNaN(itemID) || !config.items.price[itemID]) return message.channel.send('You entered an invalid item ID!');
            db.fetchObject(`balance_${message.author.id}`).then(i => {
                db.fetchArray(`inventory_${message.author.id}`).then(h => { 
                if(h.includes(itemID)) return message.channel.send('You already have this item!'); //check if user already have items
                if(i.value < config.items.price[itemID]) return message.channel.send('You don\'t have enough money to buy this item!');
                db.updateValue(`balance_${message.author.id}`, -config.items.price[itemID]).then(o => {
                    db.fetchArray(`inventory_${message.author.id}`).then(invFetched => {
                        invFetched.push(itemID);
                        db.setArray(`inventory_${message.author.id}`, invFetched).then(newInvFetched => {
                            message.channel.send(`Successfully buy item ID ${itemID} \n You now have ${o.value} \nYou now have this following items (in IDs): ${newInvFetched.join(", ")}`)
                        })
                    })
                })
                })
            })
        }
    }
}