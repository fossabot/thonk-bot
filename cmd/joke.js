const request = require('superagent');
module.exports = {
    name: 'joke',
    info: 'HAHAHAHAH SO FUNNY HFAHFJFHH',
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const { body } = await request
        .get('https://icanhazdadjoke.com/')
        .set('Accept`, `application/json');
        
        if (body.status === 200) message.channel.send(body.joke);
            else message.channel.send('Something went wrong! :(');
    },
};