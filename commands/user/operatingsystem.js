// operatingsystem.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed, version } = require('discord.js');
const { ownerid } = require('../../config.json');
const os = require('os');
module.exports = {
    name: `operatingsystem`,
    aliases: [`operatingsystem`, `os`, `hedieuhanh`, `hdh`],
    category: `user`,
    description: `Xem hệ điều hành của bot`,
    usage: `${process.env.DISCORD_PREFIX}operatingsystem`,
    run: async (client, message, args) => {
        var mbtotalmem = (os.totalmem / 1024 / 1024).toFixed(0)
        var mbfreemem = (os.freemem / 1024 / 1024).toFixed(0)
        var cpus = os.cpus()
        var cpu = cpus[1]
        const HungChannels = await client.users.fetch(ownerid);
        const embed = new MessageEmbed()
            .setTitle(`Admin: ${HungChannels.tag}\nTài khoản hoạt động: ${message.client.user.tag}\nĐây là hệ điều hành của bot:`)
            .addFields(
                { name: 'Operating System:', value: `\`\`\`${os.version()} ${os.arch()}\`\`\``, inline: true },
                { name: 'CPU:', value: `\`\`\`${cpu.model}\`\`\``, inline: true },
                { name: 'Speed:', value: `\`\`\`${cpu.speed} MHz\`\`\``, inline: true },
                { name: 'Memory:', value: `\`\`\`${(mbtotalmem - mbfreemem).toFixed(0)}/${(os.totalmem / 1024 / 1024).toFixed(0)}MB\`\`\``, inline: true },
                { name: 'Node.JS:', value: `\`\`\`${process.version}\`\`\``, inline: true },
                { name: 'Discord.JS:', value: `\`\`\`${version}\`\`\``, inline: true },
                { name: 'Admin:', value: `\`\`\`${HungChannels.tag}\`\`\`` },
            )
            .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        message.channel.send({ embeds: [embed] });
    }
}