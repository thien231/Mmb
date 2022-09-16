// kick.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
module.exports = {
    name: `kick`,
    description: `Kick người dùng khỏi discord`,
    options: [
        { name: `user`, description: `Người bạn muốn kick`, type: `USER`, required: true },
        { name: `reason`, description: `Lí do kick`, type: `STRING`, required: false }
    ],
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has('KICK_MEMBERS')) return interaction.reply(`Bạn đang thiếu quyền kick người dùng`);
        const user = interaction.options.getUser('user');
        if (user.id === interaction.user.id) return interaction.reply(`Bạn không thể kick bản thân`);
        const reason = interaction.options.getString('reason');
        interaction.guild.members.kick(user.id, reason);
        interaction.reply(`Kick người dùng ${user.tag} thành công, lí do ${reason}`);
    }
}