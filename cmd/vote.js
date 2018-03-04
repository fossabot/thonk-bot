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
        if(!config.public) return message.channel.send('This command is only for public bot!');
        dbl.hasVoted(message.author.id).then(voted => {
            if (voted) {
                db.fetch(`lastVote_${message.author.id}`).then(wat => {
                    if (wat !== moment().format('YYYY MM')) {
                        db.set(`lastVote_${message.author.id}`, moment().format('YYYY MM')).then(yey => {
                            db.fetch(`dailyAmount_${message.author.id}`).then(n => {
                                if (!n) db.add(`dailyAmount_${message.author.id}`, 500 + 250).then(m => {
                                    message.channel.send(`Successfully added daily reward to ${m}`);
                                });
                            });
                        });
                    } else {
                        message.channel.send('You already upvoted this month!');  
                    }
                });
            } else {
                message.channel.send({
                    embed: {
                        color: 'RED',
                        description: 'You can upvote this bot here [here.](https://discordbots.org/bot/412516192406732811/vote)',
                    },
                });
            }
        });
    },
};