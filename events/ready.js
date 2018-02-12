const config = require('../cfg/config.js')
exports.run = (client) => {
    console.log('Ready!');
    client.user.setActivity(`on ${client.guilds.size} guilds | ${config.prefix}.help`, { type: 'WATCHING' })
}