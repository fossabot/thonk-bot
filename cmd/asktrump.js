const trump = require('react-trump');
const discord = require('discord.js')
module.exports = {
    name: "asktrump",
    info: "ask trump some questions!",
    args: true,
    usage: "h.asktrump <question>",
    execute(message, args) {
        var num = 3
        var incluequestion = false;
        var answer = trump.answer( { args, num, incluequestion } )
        var msg = new discord.RichEmbed()
            .setColor('RANDOM')
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
            .setThumbnail('http://img2.ctoutiao.com/uploads/2016/03/16/d99d884a37da745e11fa7094215f5c91.jpg')
            .setDescription(`**Trump answered you: ${answer}** \n\nYour question: ${args.toString()}`)
        message.channel.send(msg)
    }
}