// shuffle.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `shuffle`,
  aliases: [`shuffle`, `tronnhac`],
  category: `music`,
  description: `Trộn bài hát`,
  usage: `${process.env.DISCORD_PREFIX}shuffle`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Hiện tại không có bài hát trong hàng chờ`)
    queue.shuffle()
    message.channel.send('Đã trộn bài hát')
  }
}