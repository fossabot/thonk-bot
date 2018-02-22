const jeff = require('jimp');
module.exports = {
    name: 'ugly',
    usage: '[mention]',
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const src = await jeff.read('./assets/template/ugly.png');
        let toChange = message.author.displayAvatarURL;
        if (message.mentions.users.first()) toChange = message.mentions.users.first().displayAvatarURL;
        const image = await jeff.read(toChange);
        image.resize(245, 361);
        message.channel.startTyping();
        src.composite(image, 0, 0)
            .getBuffer(jeff.MIME_PNG, (err, buffer) => {
                message.channel.stopTyping();
                message.channel.send({ file: buffer, name: 'ugly.png' });
            });
    },
};