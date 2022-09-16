// skip.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `skip`,
  aliases: [`skip`, `next`, `nextsong`, `baihatsau`],
  category: `music`,
  description: `Bỏ qua bài hát`,
  usage: `${process.env.DISCORD_PREFIX}skip`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Hiện tại không có bài hát trong hàng chờ`)
    try {
      const song = await queue.skip()
      message.channel.send(`${client.emotes.success} | Đang phát: \n${song.name}`)
    } catch (e) {
      message.channel.send(`${client.emotes.error} | ${e}`)
    }
  }
}