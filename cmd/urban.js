const ud = require('urban-dictionary');
const discord = require('discord.js');
module.exports = {
    name: 'urban',
    info: 'get definition of a word from urban dictionary. Note that it\'s only show the first entry',
    args: true,
    usage: '<word>',
    execute(message, args) { //eslint-disable-line no-unused-vars
        const definition = args.slice(0).join(' ');
        ud.term(definition, function(error, entries) {
            if(error) return message.channel.send('Something went wrong!');
            const embed = new discord.RichEmbed()
                .setTitle(`Urban dictionary: ${definition}`)
                .addField('Definition', entries[0].definition)
                .addField('Example', entries[0].example)
                .setColor('RANDOM')
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL);
            message.channel.send(embed);
        });
    },
};