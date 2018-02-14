const db = require('quick.db')
const {SlotMachine, SlotSymbol} = require('slot-machine')

module.exports = {
    name: 'slot',
    info: 'play the slot machine to win money',
    args: true,
    usage: '<dollars to bet>',
    execute(message ,args) {
        message.channel.send('This command is still in WIP!')
        // let toBet = args[0]
        // if (isNaN(toBet)) return message.channel.send(`${toBet} is not a number!`)
        // const moneybag = new SlotSymbol('moneybag', {
        //     display: '💰',
        //     points: 150,
        //     weight: 15
        // })

        // const wild = new SlotSymbol('wild', {
        //     display: '❓',
        //     points: 1000,
        //     weight: 10
        // })

        // const onehundred = new SlotSymbol('onehundred', {
        //     display: '💯',
        //     points: 200,
        //     weight: 30
        // })

        // const thonk = new SlotSymbol('thonk', {
        //     display: '<:thonk:348456376856477697>',
        //     points: 80,
        //     weight: 25
        // })

        // const thenk = new SlotSymbol('thenk', {
        //     display: '<:thenk:381471357210460161>',
        //     points: 280,
        //     weight: 10
        // })

        // const machine = new SlotMachine(3, [moneybag, wild, onehundred, thonk, thenk])
        // const r = machine.play()
        // db.fetchObject(`balance_${message.author.id}`).then(i => {
        //     if (!i.value) return message.channel.send('You must create your own wallet by typing t.bal first!')
        //     if (toBet > i.value) return message.channel.send('You don\'t have enough money to play slot!')
        // })
        // db.updateValue(`balance_${message.author.id}`, r.winCount * toBet).then(i => {
        //     if (!r.winCount) {
        //         db.updateValue(`balance_${message.author.id}`, -toBet)
        //         message.channel.send(`**You lost** $*${toBet}* dollars! Luckily you didn\'t lose your whole wallet... Better luck next time!`)
        //     } else message.channel.send(`${r.visualize()} \n**You won**: $*${r.winCount * toBet}* \n\n**You now have**: $${i.value}`);
        // })
    }
}