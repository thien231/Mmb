// afk.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { afk } = require('../../hungchannelstv/afk.js');
module.exports = {
    name: `afk`,
    aliases: [`afk`],
    category: `user`,
    description: `Bật chế độ afk cho bản thân`,
    usage: `${process.env.DISCORD_PREFIX}afk [nội dung]`,
    run: async (client, message, args) => {
        const reason = args.join(' ') || 'Không có lí do'
        const user = message.member
        afk.set(message.author.id, [Date.now(), reason])
        message.channel.send(`Bạn đã bật chế độ afk, lí do: ${reason}`)
    }
}