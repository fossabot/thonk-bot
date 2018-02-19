module.exports = {
    name: 'cringe',
    info: 'show a random image that will cringe your ass',
    execute(message, args) { //eslint-disable-line no-unused-vars
        const fs = require('fs');
        const cringe = fs.readFileSync('cringe.txt').toString().split('\n');
        const rnd = Math.floor(Math.random() * 21);
        message.channel.send(cringe[rnd]);
    },
};