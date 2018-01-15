exports.run = (client) => {
    console.log('Ready!');
    client.user.setPresence({ game: { name: `HEIL FUHRER!!!!`}})
    //pasta.sync(); //sync the database
}