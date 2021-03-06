const db = require('quick.db');
const moment = require('moment');
const discord = require('discord.js');
module.exports = {
    name: 'daily',
    info: 'give yourself daily money',
    execute(message, args) { //eslint-disable-line no-unused-vars
        db.fetch(`lastDaily_${message.author.id}`).then(i => {
            const success = new discord.RichEmbed()
                 .setColor('GREEN')
                 .addField('**Daily reward claimed!**', 'You claimed your daily *$500*!')
                 .setFooter('thonking bot', 'https://cdn.discordapp.com/avatars/412516192406732811/8519f2784c94a9664390a68ef1a4c3d7.png');
            const fail = new discord.RichEmbed()
             .setColor('RED')
             .setDescription('**You already claimed your daily reward!**')
             .setFooter('thonking bot', 'https://cdn.discordapp.com/avatars/412516192406732811/8519f2784c94a9664390a68ef1a4c3d7.png');
            if (i !== moment().format('L') || i == null) {
                db.set(`lastDaily_${message.author.id}`, moment().format('L'));
                db.add(`balance_${message.author.id}`, 500).then(() => { 
                    message.channel.send(success);
             });
            } else {
                 if (i === moment().format('L')) return message.channel.send(fail);
                 db.set(`lastDaily_${message.author.id}`, moment().format('L'));
                 db.add(`balance_${message.author.id}`, 500).then(() => { 
                     message.channel.send(success);
                 });
            }
        });
    },
};