// pat.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
module.exports = {
    name: `pat`,
    aliases: [`pat`, `xoadau`],
    category: `gifs`,
    description: `Xoa đầu ai đó`,
    usage: `${process.env.DISCORD_PREFIX}pat <tag>`,
    run: async (client, message, args) => {
        async function nekof() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.pat();
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.tag}** đã xoa đầu **${member.user.tag}**`)
                .setImage(GIF.url);
            message.channel.send({ embeds: [embed] });
        }
        nekof();
    }
}