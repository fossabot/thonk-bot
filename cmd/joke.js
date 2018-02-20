const request = require('superagent');
module.exports = {
    name: 'joke',
    info: 'HAHAHAHAH SO FUNNY HFAHFJFHH',
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const { body } = await request
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json');
        
        message.channel.send(body.joke);
    },
};