// stop.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `stop`,
  aliases: [`stop`],
  category: `music`,
  description: `Dừng phát nhạc`,
  usage: `${process.env.DISCORD_PREFIX}stop`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Hiện tại không có bài hát trong hàng chờ`)
    queue.stop()
    message.channel.send(`${client.emotes.success} | Đã dừng`)
  }
}