// autoplay.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `autoplay`,
  aliases: [`autoplay`],
  category: `music`,
  description: `Tự động phát bài hát`,
  usage: `${process.env.DISCORD_PREFIX}autoplay`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Hiện tại không có bài hát trong hàng chờ`)
    const autoplay = queue.toggleAutoplay()
    message.channel.send(`${client.emotes.success} | Autoplay: \`${autoplay ? 'bật' : 'tắt'}\``)
  }
}