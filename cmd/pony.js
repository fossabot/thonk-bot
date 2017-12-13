exports.run = (discord, client, message, args) => {
    var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>{
        const dispatcher = connection.playFile('./media/shit.mp3') //this is a fucking mlp theme song if you wondering
        dispatcher.on("end", end => {
          voiceChannel.leave();
        })
      })
}