const mongoose = require("mongoose");

const review = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
}, { timestamps: true })

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    title: { type: String, required: true, minlength: 5 },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, default: "No Brand" },
    numReview: { type: Number, required: true, default: 0 },
    rating: { type: Number, default: 0, required: true },
    sortDesc: { type: String, maxlength: 200 },
    desc: { type: String, maxlength: 1500 },
    review: [review],

}, { timestamps: true })

module.exports = mongoose.model("products", productSchema)