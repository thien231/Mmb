// botinfo.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {
    name: `botinfo`,
    aliases: [`botinfo`],
    category: `user`,
    description: `Xem thông tin của bot`,
    usage: `${process.env.DISCORD_PREFIX}botinfo`,
    run: async (client, message, args, del, member) => {
        const HungChannels = await client.users.fetch(ownerid);
        const embed = new MessageEmbed()
            .setTitle(`Admin: ${HungChannels.tag}\nĐây là thông tin của bot:`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('				**❯ Uptime:**', `${ms(client.uptime)}`, true)
            .addField('				**❯ Ping:**', `${client.ws.ping}ms`, true)
            .addField('				**❯ RAM:**', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField('				**❯ Số lượng server:**', `${client.guilds.cache.size}`, true)
            .addField(`				**❯ Số lượng người dùng:**`, `${client.users.cache.size}`, true)
            .addField('				**❯ Số lượng lệnh:**', `${client.commands.size}`, true)
            .addField('				**❯ Phiên bản Node:**', `${process.version}, ${process.platform} ${process.arch}`, true)
            .addField('				**❯ Dữ liệu:**', `${client.users.cache.size} người dùng\n${client.emojis.cache.size} emoji`, true)
            .addField('				**❯ Phiên bản Discord.js:**', `${discordjsVersion}`, true)
            .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        message.channel.send({ embeds: [embed] });
    }
}