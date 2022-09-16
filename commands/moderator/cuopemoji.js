// cuopemoji.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { Util, MessageEmbed } = require('discord.js');
const { parse } = require('twemoji-parser');
module.exports = {
    name: `cuopemoji`,
    aliases: [`cuopemoji`, `cuopemo`, `stealemoji`, `stealemo`],
    category: `moderator`,
    description: `Lấy emoji từ server khác`,
    usage: `${process.env.DISCORD_PREFIX}cuopemoji <emoji>`,
    run: async (client, message, args) => {
        if (!message.member.permissions.has('MANAGE_EMOJIS_AND_STICKERS')) return message.reply(`Bạn đang thiếu quyền thêm emoji và sticker`);
        const emoji = args[0];
        if (!emoji) return message.reply(`Bạn chưa nhập emoji cần lấy`);
        let customemoji = Util.parseEmoji(emoji);
        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? 'gif' : 'png'}`;
            const name = args.slice(1).join(' ');
            message.guild.emojis.create(`${Link}`, `${name || `${customemoji.name}`}`);
            const Added = new MessageEmbed()
                .setDescription(`Thêm thành công\nTên emoji: ${name || `${customemoji.name}`}`)
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [Added] });
        } else {
            let CheckEmoji = parse(emoji, { assetType: 'png' });
            if (!CheckEmoji[0]) return message.reply(`Emoji không hợp lệ`);
        }
    }
}