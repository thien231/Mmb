// database.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
async function database(mongoose) {
    await mongoose.connect(process.env.MONGODB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(console.log(`[DATABASE] Đã kết nối với MongoDB | Admin: Hùng Channels#0669`))
}

module.exports = database;
