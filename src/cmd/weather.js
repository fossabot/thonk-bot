const weather = require('weather-js');
const discord = require('discord.js');
module.exports = {
    name: 'weather',
    args: true,
    info: 'Show the weather of a location',
    usage: '<location>',
    guildOnly: false,
    execute (message, args) {
        weather.find({ search: args.join(' '), degreeType: 'C' }, function(err, result) {
            if (err) console.log(err);
            const current = result[0].current;
            const location = result[0].location;

            const msg = new discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor('RANDOM')
                .addField('Timezone \:clock3:', `UTC${location.timezone}`, true)
                .addField('Temperature \:thermometer:', `${current.temperature} °C`, true)
                .addField('Feels Like \:thermometer:', `${current.feelslike} °C`, true)
                .addField('Winds \:wind_blowing_face:', current.winddisplay, true)
                .addField('Humidity \:sweat_drops:', `${current.humidity}%`, true);
            message.channel.send(msg);
            });
        },
};