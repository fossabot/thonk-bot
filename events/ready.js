exports.run = (client) => {
    console.log('Ready!');
    client.user.setPresence({game: {name: `on ${client.guilds.size} guilds | h.help`, type: 'WATCHING'}});
}