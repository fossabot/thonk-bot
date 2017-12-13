exports.run = (discord, client, message, args) => {
    let dmMessage = args[0];
    message.author.send(dmMessage + ' `sent from t!pm`');
}