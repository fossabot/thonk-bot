const db = require('quick.db');
const moment = require('moment');
const discord = require('discord.js');
module.exports = {
    name: 'daily',
    info: 'give yourself some daily bonus',
    execute(message, args) { //eslint-disable-line no-unused-vars
       db.fetchObject(`lastDaily_${message.author.id}`).then(i => {
           const success = new discord.RichEmbed()
                .setColor('GREEN')
                .addField('**Daily reward claimed!**', 'You claimed your daily *$500*! \n\nWant more? You can vote the bot to get another *$500*! \nType t.vote for more info')
                .setFooter('thonking bot', 'https://cdn.discordapp.com/avatars/412516192406732811/8519f2784c94a9664390a68ef1a4c3d7.png');
           const fail = new discord.RichEmbed()
            .setColor('RED')
            .setDescription('**You already claimed your daily reward!** \n\nWant more? You can vote the bot to get another *$500*! \nType t.vote for more info')
            .setFooter('thonking bot', 'https://cdn.discordapp.com/avatars/412516192406732811/8519f2784c94a9664390a68ef1a4c3d7.png');
           if (!i.text) {
               db.updateText(`lastDaily_${message.author.id}`, moment().format('L'));
               db.updateValue(`balance_${message.author.id}`, 500).then(() => { 
                   message.channel.send(success);
            });
           } else {
                if (i.text === moment().format('L')) return message.channel.send(fail);
                db.updateText(`lastDaily_${message.author.id}`, moment().format('L'));
                db.updateValue(`balance_${message.author.id}`, 500).then(() => { 
                    message.channel.send(success);
                });
           }
       });
    },
};