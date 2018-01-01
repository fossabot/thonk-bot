exports.run = (client) => {
    console.log('Ready!');
    client.user.setPresence({ game: { name: `${config.prefix}help`}})
    //pasta.sync(); //sync the database
}