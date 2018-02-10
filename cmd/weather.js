const weather = require("weather-js")
module.exports = {
    name: 'weather',
    args: true,
    info: 'Show the weather of a location',
    usage: '<location>',
    execute (message,args){
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) console.log(err)
            var current = result[0].current
            var location = result[0].location
        })
    }
}