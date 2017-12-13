exports.run = (discord, client, message, args) => {
  if (pony = false) return;
    var voiceChannel = message.member.voiceChannel;
    message.reply('cancer activated, type t!pony again to cancel.')
      voiceChannel.join().then(connection =>{
        const dispatcher = connection.playFile('./media/shit.mp3') //this is a fucking mlp theme song if you wondering
        dispatcher.on("end", end => {
          voiceChannel.leave();
        })
      })
}