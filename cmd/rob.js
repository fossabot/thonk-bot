const db = require('quick.db');
const config = require('../cfg/config.js');
const discord = require('discord.js');
module.exports = {
    name: 'rob',
    info: 'rob people, note that you can only rob people that is opted in',
    guildOnly: true,
    args: true,
    usage: '<amount to rob> <user to rob, it can be mention or tag (like tsb#3160)>',
    execute (message, args) {
        const robAmount = args[0];
        const toRob = message.mentions.users.first() || client.users.find('tag', args.slice(1).join(' '));
        const chances = Math.round(Math.random() * 100);
        let robbed;
        chances < 50 ? robbed = true : robbed = false;
        if (config.ownerID.includes(toRob.id)) return message.channel.send('<:redtick:412529964945113100> **You can\'t rob bot owner.**');
        db.fetch(`balance_${toRob.id}`).then(i => {
            db.fetch(`balance_${message.author.id}`).then(o => {
                if (robAmount > i) return message.channel.send('<:redtick:412529964945113100> **You have insufficient ammount of dollars.**');
                if (robAmount > o) return message.channel.send('<:redtick:412529964945113100> **The target have insufficient amount of dollars.**');
                if (robbed) {
                    db.add(`balance_${message.author.id}`, parseInt(robAmount)).then(a => {
                        const success = new discord.RichEmbed()
                            .setAuthor(message.author.tag, message.author.displayAvatarURL)
                            .setTitle(`<:tick:412529951238258688> Successfully robbed ${toRob.tag}`)
                            .setColor('GREEN')
                            .setDescription(`You now have $${a}`); 
                        message.channel.send(success);
                        db.subtract(`balance_${toRob.id}`, parseInt(robAmount)).then(b => {
                            const raped = new discord.RichEmbed()
                                .setAuthor('Oh no!', message.author.displayAvatarURL)
                                .setTitle(`💸 Robbed by ${message.author.tag}`)
                                .setColor('RED')
                                .setDescription(`You now have $${b}`);
                            toRob.send(raped);
                        });
                    });
                } else if (!robbed) {
                    db.subtract(`balance_${message.author.id}`, parseInt(robAmount)).then(m => {
                        const failed = new discord.RichEmbed()
                            .setTitle('💸 Oh no!')
                            .setDescription(`You tried to rob ${toRob.tag}, but the cop caught you, they fined you $${robAmount}!`)
                            .setColor('RED')
                            .setFooter(`You now have $${m}`);
                        message.channel.send(failed);
                        //not gonna send a alert to target, fuck em.
                    });
                }
            });
        });
    },
};