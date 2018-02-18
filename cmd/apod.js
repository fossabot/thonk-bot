const request = require('superagent');
const config = require('../cfg/config');
const discord = require('discord.js')

module.exports = {
    name: 'apod',
    info: 'Get the Astronomy Picture of the Day from NASA',
    async execute(message, args) {
        if(!config.tokens.nasa) return message.channel.send('You haven\'t set the NASA API key!');
        const {body} = await request
        .get(`https://api.nasa.gov/planetary/apod?api_key=${config.tokens.nasa}`)

        const embed = new discord.RichEmbed()
            .setTitle(`Astronomy Picture of the Day: ${body.title}`)
            .setFooter(`${body.date}`)
            .setImage(`${body.url}`)
            .setColor(`0080FF`)
        message.channel.send(embed)
    }
}