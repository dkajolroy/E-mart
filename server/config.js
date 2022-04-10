const mongoose = require("mongoose")

const DbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_LOCAL)
        console.log("Database Connected");
    } catch (error) {
        console.log("Database Connection Fail");
    }
}

module.exports = DbConnect