exports.run = (client) => {
    console.log('Ready!');
    client.user.setPresence({ game: { name: `${config.prefix}help`}})
}