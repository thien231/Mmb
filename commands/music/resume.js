// resume.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `resume`,
  aliases: [`resume`, `unpause`, `tieptuc`],
  category: `music`,
  description: `Tiếp tục bài hát`,
  usage: `${process.env.DISCORD_PREFIX}resume`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Hiện tại không có bài hát trong hàng chờ`)
    queue.resume()
    message.channel.send('Đã tiếp tục bài hát')
  }
}