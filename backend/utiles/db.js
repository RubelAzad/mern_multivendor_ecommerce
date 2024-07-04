const mongoose = require('mongoose');

module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL,{useNewURLParser: true, useUnifiedTopology: true});
        console.log('MongoDB connected...');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}   