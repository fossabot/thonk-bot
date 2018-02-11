exports.run = (client) => {
    console.log('Ready!');
    client.user.setPresence({ game: { name: `@me for more info`, ActivityType: 'WATCHING'}})
}