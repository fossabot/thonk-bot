const request = require('superagent');
const discord = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'yesorno',
    info: 'Yes or no?',
    args: true,
    usage: '<question>',
    aliases: ['yon'],
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const { body } = await request
        .get('https://yesno.wtf/api');

        const embed = new discord.RichEmbed()
            .setTitle(`Answer: ${body.answer}`)
            .setImage(body.image)
            .setColor('RANDOM')
            .setFooter(`Requested by ${message.author.username} at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`, message.author.displayAvatarURL);
        message.channel.send(embed);
    },
};