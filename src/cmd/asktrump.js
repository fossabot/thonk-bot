const trump = require('react-trump');
const discord = require('discord.js');
module.exports = {
    name: 'asktrump',
    info: 'ask trump some questions!',
    args: true,
    usage: '<question>',
    aliases: ['trump'],
    execute(message, args) {
        const num = 1;
        const incluequestion = false;
        const question = args.slice(0).join(' ');
        const answer = trump.answer({ question, num, incluequestion });
        const msg = new discord.RichEmbed()
            .setColor('RANDOM')
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
            .setThumbnail('https://i.imgur.com/6FS0nIp.jpg')
            .setDescription(`**You:** ${question} \n\n**Trump: ${answer}**`);
        message.channel.send(msg);
    },
};