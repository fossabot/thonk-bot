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
            .setThumbnail('http://img2.ctoutiao.com/uploads/2016/03/16/d99d884a37da745e11fa7094215f5c91.jpg')
            .setDescription(`**You:** ${question} \n\n**Trump: ${answer}**`)
        message.channel.send(msg)
    }
}