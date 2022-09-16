// admin.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../../config.json');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: `admin`,
    aliases: [`admin`, `munnose`, `huuthien`, `tranthien`],
    category: `other`,
    description: `Thông tin của admin`,
    usage: `${process.env.DISCORD_PREFIX}admin`,
    run: async (client, message, args) => {
        const HungChannels = await client.users.fetch(ownerid);
        const embed = new MessageEmbed()
            .setTitle(`Admin : ${HungChannels.tag}`)
            .setDescription(`Bot điều hành bởi ${HungChannels.tag}`)
            .setThumbnail(HungChannels.displayAvatarURL())
            .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        message.channel.send({ embeds: [embed] });
    }
}