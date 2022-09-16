// say.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
module.exports = {
    name: `say`,
    description: `Muốn bot nói thay bản thân`,
    type: `CHAT_INPUT`,
    options: [{ name: `query`, description: `Nội dung muốn bot nói`, type: `STRING`, required: true }],
    run: async (client, interaction) => {
        const query = interaction.options.getString('query');
        interaction.reply(`${query}`)
    }
}