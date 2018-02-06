exports.run = (client) => {
    console.log('Ready!');
    client.user.setPresence({ game: { name: `@me for more info`, type: 3}})
    //pasta.sync(); //sync the database
}