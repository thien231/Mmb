// help.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
module.exports = {
    name: `help`,
    aliases: [`help`, `h`],
    category: `user`,
    description: `Hiện toàn bộ lệnh có mặt của bot`,
    usage: `${process.env.DISCORD_PREFIX}help [tên lệnh]`,
    run: async (client, message, args) => {
        const roleColor =
            message.guild.me.displayHexColor === '#000000'
                ? '#ffffff'
                : message.guild.me.displayHexColor;
        if (!args[0]) {
            let categories = [];
            readdirSync('./commands/').forEach((dir) => {
                const commands = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));
                const cmds = commands.map((command) => {
                    let file = require(`../../commands/${dir}/${command}`);
                    if (!file.name) return `Không có lệnh nào như vậy cả`;
                    let name = file.name.replace(".js", "");
                    return `\`${name}\``;
                });
                let data = new Object();
                data = {
                    name: dir.toUpperCase(),
                    value: cmds.length === 0 ? "In progress." : cmds.join(' '),
                };
                categories.push(data);
            });
            const HungChannels = await client.users.fetch(ownerid);
            const embed = new MessageEmbed()
                .setTitle(`Admin: ${HungChannels.tag}\nĐây là các lệnh của bot:`)
                .addFields(categories)
                .setDescription(`Dùng \`${process.env.DISCORD_PREFIX}help\` cùng với tên lệnh để biết thêm chi tiết. Ví dụ: \`${process.env.DISCORD_PREFIX}help ping\``)
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else {
            const HungChannels = await client.users.fetch(ownerid);
            const command = client.commands.get(args[0].toLowerCase()) || client.commands.find((c) => c.aliases && c.aliases.includes(args[0].toLowerCase()));
            if (!command) {
                const embed = new MessageEmbed()
                    .setTitle(`Sai lệnh, dùng \`${process.env.DISCORD_PREFIX}help\` để xem các lệnh có mặt`)
                    .setColor('RANDOM');
                message.channel.send({ embeds: [embed] });
            }
            const embed = new MessageEmbed()
                .setTitle(`Admin: ${HungChannels.tag}\nThông tin lệnh ${command.name}:`)
                .setDescription(`
                    **Prefix:** ${process.env.DISCORD_PREFIX}
                    **Tên lệnh:** ${command.name ? command.name : `Không có lệnh nào`}
                    **Tên rút gọn:** \`${command.aliases ? command.aliases.join('` `') : `Không có tên rút gọn`}\`
                    **Cách dùng:** ${command.usage ? command.usage : `Không có cách dùng`}
                    **Mô tả:** ${command.description ? command.description : `Không có mô tả`}
                    Cú pháp: <> = bắt buộc, [] = không bắt buộc`)
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        }
    }
}