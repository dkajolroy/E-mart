const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name: { type: String, minlength: 3, required: true, maxlength: 30 },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 4, maxlength: 100 },
    isAdmin: { type: Boolean, required: true, default: false }
}, { timestamps: true })
module.exports = mongoose.model("user", UserSchema)