const db = require('quick.db');
module.exports = {
    name: 'addtag',
    info: 'add a tag',
    args: 'true',
    usage: '<tag name> <content>',
    execute(message, args) {
        const name = args[0];
        const content = args.slice(1).join(' ');
        db.fetchObject(`tag_${name}`).then(i => {
            if (i.text) {return message.channel.send('The tag\'s name is already claimed!')} //eslint-disable-line semi
                else if (!content) {return message.channel.send('Please provide content!')} //eslint-disable-line semi
                    else {
                        db.updateText(`tag_${name}`, content).then(o => { //eslint-disable-line no-unused-vars
                            message.channel.send(`Successfully added tag ${name}`);
                        });
                    }
        });
    },
};