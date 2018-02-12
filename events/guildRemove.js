const config = require('../cfg/config.js');
exports.run = (client) => {
    console.log(`${guild.name} dont know how to think`)
    client.user.setActivity(`on ${client.guilds.size} guilds | ${config.prefix}.help`, { type: 'WATCHING' })
}