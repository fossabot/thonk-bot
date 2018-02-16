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
                message.channel.startTyping();
                try {
                    cb.ask(toAsk, function(err, response) {
                        message.channel.send(response)
                        message.channel.stopTyping();
                    })
                } catch (err) {
                    message.channel.send('Something went wrong!')
                }
            })
    }

}