// ban.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
module.exports = {
    name: `ban`,
    description: `Ban người dùng khỏi discord`,
    options: [
        { name: `user`, description: `Người bạn muốn ban`, type: `USER`, required: true },
        { name: `reason`, description: `Lí do ban`, type: `STRING`, required: false },
        { name: `days`, description: `Ngày xóa tin nhắn`, type: `INTEGER`, minValue: 0, maxValue: 7 }
    ],
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.reply(`Bạn đang thiếu quyền kick người dùng`);
        const user = interaction.options.getUser('user');
        if (user.id === interaction.user.id) return interaction.reply(`Bạn không thể ban bản thân`);
        const reason = interaction.options.getString('reason');
        const days = interaction.options.getInterger('days');
        interaction.guild.members.ban(user.id, [reason, days]);
        interaction.reply(`Kick người dùng ${user.tag} thành công, lí do ${reason}`);
    }
}