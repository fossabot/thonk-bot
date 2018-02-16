const config = require('../cfg/config.js');
const cleverbot = require('cleverbot.io');
cb = new cleverbot(config.tokens.cleverbot_api.user, config.tokens.cleverbot_api.key)
cb.setNick("85fa9ecb-f545-404a-a7e3-1756695d4021")
module.exports = {
    name: 'cleverbot',
    aliases: ['cb', 'talk'],
    info: 'Talk to cleverbot!',
    args: true,
    usage: '<message>',
    execute(message, args) {
        let toAsk = args.slice(0).join(" ");
        cb.create(function(err, session) {
            message.channel.send('Requesting... This might be take a while.').then(msg => {
                cb.ask(toAsk, function(err, response) {
                    msg.edit(response)
                }).catch(e => {
                    message.channel.send(`Something went wrong! \`${e}\``)
                })
            })

        })
    }
}