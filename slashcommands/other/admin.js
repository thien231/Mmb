// admin.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { ownerid } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: `admin`,
    description: `Thông tin của admin`,
    type: `CHAT_INPUT`,
    run: async (client, interaction) => {
        const HungChannels = await client.users.fetch(ownerid);
        const embed = new MessageEmbed()
            .setTitle(`Admin : ${HungChannels.tag}`)
            .setDescription(`Bot điều hành bởi ${HungChannels.tag}`)
            .setThumbnail(HungChannels.displayAvatarURL())
            .setFooter(`Người yêu cầu: ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        interaction.reply({ embeds: [embed] });
    }
}