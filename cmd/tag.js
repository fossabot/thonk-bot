const db = require('quick.db');
module.exports = {
    name: 'tag',
    info: 'view a tag created by others',
    args: true,
    usage: '<tag name>',
    execute(message, args) {
        const name = args[0];
        db.fetch(`tag_${name}`).then(i => {
            if (!i) { return message.channel.send('The tag does not exist!'); }
                else {
                    message.channel.send(`**Tag name**: ${name}\n\n**Content**: ${i}`);
                }
        });
    },
};