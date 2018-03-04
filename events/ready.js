const config = require('../cfg/config.js');
exports.run = (client) => {
    console.log('Ready!');
    if (!config.public) console.log('BOT SET TO PRIVATE MODE')
    client.user.setPresence({ game: { name: `on ${client.guilds.size} guilds | ${config.prefix}help`, type: 3 } });
};