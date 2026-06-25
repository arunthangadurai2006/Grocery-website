const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const con = await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB Connected to host: " + con.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Error:", error.message);
        process.exit(1); // stop server if DB fails
    }
};

module.exports = connectDatabase;