// stats.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const { ownerid } = require('../../config.json');
module.exports = {
  name: `stats`,
  aliases: [`stats`],
  category: `admin`,
  description: `Xem trạng thái bot(chỉ admin sử dụng)`,
  usage: `${process.env.DISCORD_PREFIX}stats`,
  run: async (client, message, args) => {
    if (message.author.id !== ownerid) return message.reply(`Bạn phải là admin để sử dụng lệnh này`);
    let totalSeconds = message.client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    const HungChannels = await client.users.fetch(ownerid);
    let uptime = `\`\`\`${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây\`\`\``;
    let embed = new MessageEmbed()
      .setTitle(`Admin: ${HungChannels.tag}\nTài khoản hoạt động: ${message.client.user.tag}\nĐây là trạng thái của bot:`)
      .addFields(
        { name: 'Servers:', value: `\`\`\`${client.guilds.cache.size}\`\`\``, inline: true },
        { name: 'Users:', value: `\`\`\`${client.users.cache.size}\`\`\``, inline: true },
        { name: 'Channels:', value: `\`\`\`${client.channels.cache.size}\`\`\``, inline: true },
        { name: 'Uptime:', value: uptime, inline: true },
        { name: 'Ping:', value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
        { name: 'RAM:', value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true },
        { name: 'Admin:', value: `\`\`\`${HungChannels.tag}\`\`\`` },
      )
      .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('RANDOM');
    message.channel.send({ embeds: [embed] });
  }
}