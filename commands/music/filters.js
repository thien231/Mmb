// filters.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `filter`,
  aliases: [`filter`],
  category: `music`,
  description: `Thêm/Xóa bộ lọc`,
  usage: `${process.env.DISCORD_PREFIX}filter <add/remove> <filter>`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Hiện tại không có bài hát trong hàng chờ`)
    if (args[0] === 'off' && queue.filters?.length) queue.setFilter(false)
    else if (Object.keys(client.distube.filters).includes(args[0])) queue.setFilter(args[0])
    else if (args[0]) return message.channel.send(`${client.emotes.error} | Filter không khả dụng`)
    message.channel.send(`Filter hàng chờ hiện tại: \`${queue.filters.join(', ') || 'Tắt'}\``)
  }
}