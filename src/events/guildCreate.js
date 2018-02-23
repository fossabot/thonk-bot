const config = require('../cfg/config.js');
exports.run = (client, guild) => {
    console.log(`${guild.name} added thonk bot yey`)
    client.user.setPresence(`on ${client.guilds.size} guilds | ${config.prefix}.help`, { type: 'WATCHING' });
};