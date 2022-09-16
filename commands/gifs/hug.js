// hug.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
module.exports = {
    name: `hug`,
    aliases: [`hug`],
    category: `gifs`,
    description: `Ôm ai đó`,
    usage: `${process.env.DISCORD_PREFIX}hug <tag>`,
    run: async (client, message, args) => {
        async function nekof() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.hug();
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.tag}** đã ôm **${member.user.tag}**`)
                .setImage(GIF.url);
            message.channel.send({ embeds: [embed] });
        }
        nekof();
    }
}