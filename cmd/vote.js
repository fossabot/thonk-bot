const config = require('../cfg/config');
const DBL = require('dblapi.js');
const dbl = new DBL(config.tokens.dbl);
const db = require('quick.db');
const moment = require('moment');
const discord = require('discord.js');
module.exports = {
    name: 'vote',
    info: 'support the bot by voting to get rewards!',
    execute(message, args) { //eslint-disable-line no-unused-vars
        const notVoted = new discord.RichEmbed()
            .setColor('GREEN')
            .setDescription(`Hello! You can vote me on discordbots.org to support this project\nYou can get another *$500* after voting\nAfter you voted me, please type ${config.prefix}vote to claim the reward\nLink: [Here!](https://discordbots.org/bot/412516192406732811/vote)`);
        const alreadyVoted = new discord.RichEmbed()
            .setColor('RED')
            .setDescription('You already voted today! Please vote again tomorrow.');
        dbl.hasVoted(message.author.id).then(i => {
            if (!i) return message.channel.send(notVoted);
            db.fetchObject(`hasVoted_${message.author.id}`).then(o => {
                if(i && o.text === moment().format('L')) return message.channel.send(alreadyVoted);
                db.updateText(`hasVoted_${message.author.id}`, moment().format('L')).then(() => {
                    db.updateValue(`balance_${message.author.id}`, 500).then(p => {
                        const voted = new discord.RichEmbed()
                        .setTitle('Vote registered!')
                        .setDescription(`Thanks for voting! *$500* has been added to your wallet! \nYou now have: *$${p.value}*`);
                        message.channel.send(voted);
                    });
                });
            });
        });
    },
};