// snipe.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: `snipe`,
    aliases: [`snipe`],
    category: `other`,
    description: `Xem tin nhắn đã bị xóa`,
    usage: `${process.env.DISCORD_PREFIX}snipe`,
    run: async (client, message, args) => {
        const sniper = client.snipes.get(message.channel.id);
        if (!sniper) return message.channel.send(`Không tìm thấy tin nhắn đã bị xóa`);
        const embed = new MessageEmbed()
            .setTitle(`Người gửi: ${sniper.author.tag}`)
            .setDescription(sniper.content)
            .setImage(sniper.image)
            .setTimestamp()
            .setFooter(`Message ID: ${sniper.ID} | Author ID: ${sniper.author.id}`)
            .setColor('RANDOM');
        message.channel.send({ embeds: [embed] })
    }
}