const jeff = require('jimp');
module.exports = {
    name: 'deleted',
    info: 'y my account get banned?!?#/1',
    usage: '[mention or url]',
    async execute(message, args) { //eslint-disable-line no-unused-line
        const src = await jeff.read('./assets/template/account-deleted.png');
        let toChange = message.author.displayAvatarURL;
        if (message.mentions.users.first()) toChange = message.mentions.users.first().displayAvatarURL;
        if (args.slice(0).join(' ').startsWith('http')) toChange = args.slice(0).join(' ');
        const img = await jeff.read(toChange);
        message.channel.startTyping();
        img.resize(278, 275);
        src.composite(img, 239, 367)
            .getBuffer(jeff.MIME_PNG, (err, buffer) => {
                message.channel.stopTyping();
                message.channel.send({ file: buffer, name:'deleted.png' });
            });
    },
}; //239, 367