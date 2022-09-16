// pause.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `pause`,
  aliases: [`pause`, `tamdung`],
  category: `music`,
  description: `Tạm dừng bài hát`,
  usage: `${process.env.DISCORD_PREFIX}pause`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Hiện tại không có bài hát trong hàng chờ`)
    if (queue.pause) {
      queue.resume()
      return message.channel.send('Đã tiếp tục bài hát')
    }
    queue.pause()
    message.channel.send('Đã tạm dừng bài hát')
  }
}