// emoji.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { Util, MessageEmbed } = require('discord.js');
const { parse } = require('twemoji-parser');
module.exports = {
    name: `emoji`,
    aliases: [`emoji`],
    category: `other`,
    description: `Xem bản phóng to của emoji`,
    usage: `${process.env.DISCORD_PREFIX}emoji <emoji>`,
    run: async (client, message, args) => {
        const emoji = args[0];
        if (!emoji) return message.channel.send(`Bạn chưa nhập emoji`);
        const custom = Util.parseEmoji(emoji);
        const embed = new MessageEmbed()
            .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        if (custom.id) {
            const link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? 'gif' : 'png'}`;
            embed.setImage(link)
                .setTitle(`Phiên bản phóng to của emoji: ${emoji}, ID: ${custom.id}`);
            message.channel.send({ embeds: [embed] });
        } else {
            const parsed = parse(emoji, { assetType: 'png' });
            if (!parsed[0]) return message.channel.send('Emoji không hợp lệ');
            embed.setImage(parsed[0].url)
                .setTitle(`Phiên bản phóng to của emoji: ${emoji}`);
            message.channel.send({ embeds: [embed] });
        }
    }
}