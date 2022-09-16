// kitmau.js File
// Code by Hùng Channels
// #Discord.js #HungChannels #Code
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'lolipvp1',
    aliases: ['lolipvp1', '1'],
    category: 'lolishop',
    description: "Loli PvPV1",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`Loli PvPV1`)
            .setDescription(`**ID: 1**`)
            .setImage(`https://media.discordapp.net/attachments/1003242700239286332/1005752105484685413/unknown.png`)
            .addFields({ name: `Giá: 10.000 VNĐ`, value: `**Mô tả: Kit dành cho pvp hoặc cpvp**`, inline: true})
            .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        message.channel.send({ embeds: [embed] })
    }
}
