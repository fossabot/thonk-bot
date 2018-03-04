const db = require('quick.db');
const moment = require('moment');
const discord = require('discord.js');
module.exports = {
    name: 'daily',
    info: 'give yourself daily money',
    execute(message, args) { //eslint-disable-line no-unused-vars
       db.fetch(`lastDaily_${message.author.id}`).then(i => {
           if (!i || i !== moment().format('L')) {
               db.fetch(`dailyAmount_${message.author.id}`).then(o => {
                   if(!o) {
                       db.set(`dailyAmount_${message.author.id}`, 500).then(p => {
                       db.add(`balance_${message.author.id}`, p).then(() => {
                           db.set(`lastDaily_${message.author.id}`, moment().format('L')).then(() => {
                               const kk = new discord.RichEmbed()
                                    .setFooter(client.user.username, client.user.displayAvatarURL)
                                    .setDescription('Successfully claimed daily reward \nWant more? You can upvote the bot to add more amount to your daily reward! \nType t.vote for more information');
                                message.channel.send(kk);
                           });
                       });
                   });
                } else {
                    db.fetch(`dailyAmount_${message.author.id}`).then(m => {
                        db.add(`balance_${message.author.id}`, m).then(() => {
                            db.set(`lastDaily_${message.author.id}`, moment().format('L')).then(() => {
                                const kk = new discord.RichEmbed()
                                     .setFooter(client.user.username, client.user.displayAvatarURL)
                                     .setColor('GREEN')
                                     .setDescription('Successfully claimed daily reward \nWant more? You can upvote the bot to add more amount to your daily reward! \nType t.vote for more information');
                                 message.channel.send(kk);
                            });
                        });
                    });
                }
                });
        } else {
            const lolrekt = new discord.RichEmbed()
            .setDescription('You already claimed daily reward, please come back tomorrow! \nWant more? You can upvote the bot to add more amount to your daily reward! \nType t.vote for more information')
            .setFooter(client.user.username, client.user.displayAvatarURL)
            .setColor('RED');
            message.channel.send(lolrekt);
        }
       });
    },
};