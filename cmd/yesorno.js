const request = require('superagent');
const discord = require('discord.js');
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
            .setColor('RANDOM');
        message.channel.send(embed);
    },
};