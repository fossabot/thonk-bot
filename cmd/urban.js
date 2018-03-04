const request = require('superagent');
const discord = require('discord.js');
module.exports = {
    name: 'urban',
    info: 'get definition of a word from urban dictionary. Note that it only shows the first entry',
    args: true,
    usage: '<word>',
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const { body } = await request
        .get(`http://api.urbandictionary.com/v0/define?term=${encodeURIComponent(args.join(' '))}`);

        if (body.result_type === "no_results") return message.channel.send(`Can\'t find definition about \`${args.join(' ')}\`!`);
        const yey = new discord.RichEmbed()
            .setAuthor('Urban Dictionary', 'https://i.imgur.com/3Z6q4LK.png', 'https://www.urbandictionary.com/')
            .setFooter(client.user.username, client.user.displayAvatarURL)
            .setColor('ORANGE')
            .addField('Definition', body.list[0].definition)
            .addField('Example', body.list[0].example);
        message.channel.send(yey);
    },
};