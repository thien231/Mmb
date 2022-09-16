// serverlist.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const { ownerid } = require('../../config.json');
module.exports = {
  name: `serverlist`,
  aliases: [`serverlist`],
  category: `admin`,
  description: `Xem các server sử dụng bot(chỉ admin sử dụng)`,
  usage: `${process.env.DISCORD_PREFIX}serverlist`,
  run: async (client, message, args) => {
    if (message.author.id !== ownerid) return message.reply(`Bạn phải là admin để sử dụng lệnh này`);
    let i0 = 0;
    let i1 = 10;
    let page = 1;
    let description =
      `Tổng số server - ${client.guilds.cache.size}\n\n` + client.guilds.cache
        .sort((a, b) => b.memberCount - a.memberCount)
        .map(r => r)
        .map((r, i) => `${i + 1}.${r.name} | ${r.memberCount} người dùng | ID - ${r.id}`)
        .slice(0, 10)
        .join("\n\n");
    const HungChannels = await client.users.fetch(ownerid);
    let embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setTitle(`Admin: ${HungChannels.tag}\nĐây là các server đã dùng bot:`)
      .setColor('RANDOM')
      .setFooter(`Page - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`)
      .setDescription(description);
    let msg = await message.channel.send({ embeds: [embed] });
    await msg.react('⬅');
    await msg.react('➡');
    await msg.react('❌');
    let collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);
    collector.on('collect', async (reaction, user) => {
      if (reaction._emoji.name === '⬅') {
        i0 = i0 - 10;
        i1 = i1 - 10;
        page = page - 1;
        if (i0 + 1 < 0) {
          console.log(i0)
          return msg.delete();
        }
        if (!i0 || !i1) { return msg.delete() }
        description =
          `Tổng số server - _**${client.guilds.cache.size}**_\n\n` + client.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .map(r => r)
            .map(
              (r, i) => `${i + 1}.${r.name} | ${r.memberCount} người dùng | ID - ${r.id}`)
            .slice(i0, i1)
            .join("\n\n");
        embed
          .setFooter(`Trang - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`)
          .setDescription(description);
        msg.edit({ embeds: [embed] });
      }
      if (reaction._emoji.name === '➡') {
        i0 = i0 + 10;
        i1 = i1 + 10;
        page = page + 1;
        if (i1 > client.guilds.cache.size + 10) { return msg.delete() }
        if (!i0 || !i1) { return msg.delete() }
        description =
          `Tổng số server - ${client.guilds.cache.size}\n\n` + client.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .map(r => r)
            .map(
              (r, i) => `${i + 1}.${r.name} | ${r.memberCount} người dùng | ID - ${r.id}`)
            .slice(i0, i1)
            .join("\n\n");
        embed
          .setFooter(`Trang - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`)
          .setDescription(description);
        msg.edit({ embeds: [embed] });
      }
      if (reaction._emoji.name === '❌') return msg.delete()
      await reaction.users.remove(message.author.id);
    })
  }
}