const db = require('quick.db')
const moment = require('moment')
const discord = require('discord.js')
module.exports = {
    name: 'daily',
    info: 'give yourself some daily bonus',
    execute(message, args, client) {
       db.fetchObject(`lastDaily_${message.author.id}`).then(i => {
           let success = new discord.RichEmbed()
                .setColor('GREEN')
                .addField(`**Daily reward claimed!**`, `You claimed your daily *$500*!`)
                .setFooter(`thonking bot`, 'https://cdn.discordapp.com/avatars/412516192406732811/8519f2784c94a9664390a68ef1a4c3d7.png')
           let fail = new discord.RichEmbed()
            .setColor('RED')
            .setDescription(`**You already claimed your daily reward!**`)
            .setFooter(`thonking bot`, 'https://cdn.discordapp.com/avatars/412516192406732811/8519f2784c94a9664390a68ef1a4c3d7.png')
           if (!i.text) {
               db.updateText(`lastDaily_${message.author.id}`, moment().format('L'))
               db.updateValue(`balance_${message.author.id}`, 500).then(o => {
                   message.channel.send(success)
               })
           } else {
                if (i.text === moment().format('L')) return message.channel.send(fail)
                db.updateText(`lastDaily_${message.author.id}`, moment().format('L'))
                db.updateValue(`balance_${message.author.id}`, 500).then(o => {
                    message.channel.send(success)
                })
           }
       }) 
    }
}