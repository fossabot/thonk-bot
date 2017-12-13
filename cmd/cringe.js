exports.run = (discord, client, message, args) => {
    var fs = require('fs');
          var cringe = fs.readFileSync('cringe.txt').toString().split("\n");
          var rnd = Math.floor(Math.random() * 21);
          message.channel.send(cringe[rnd]);
}