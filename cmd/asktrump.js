const trump = require('react-trump');
const discord = require('discord.js')
module.exports = {
    name: "asktrump",
    info: "ask trump some questions!",
    args: true,
    usage: "<question>",
    aliases: ['trump'],
    execute(message, args) {
        var num = 1
        var incluequestion = false;
        var question = args.slice(0).join(" ")
        var answer = trump.answer( { question, num, incluequestion } )
        var msg = new discord.RichEmbed()
            .setColor('RANDOM')
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
            .setThumbnail('https://i.imgur.com/6FS0nIp.jpg')
            .setDescription(`**You:** ${question} \n\n**Trump: ${answer}**`)
        message.channel.send(msg)
    }
}