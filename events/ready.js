exports.run = (client) => {
    console.log('Ready!');
    client.user.setPresence({ game: { name: `your mum`, type: 3}})
    //pasta.sync(); //sync the database
}