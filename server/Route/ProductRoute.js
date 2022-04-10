const Route = require("express").Router();
const productSchema = require("../Models/ProductModel")
const asyncHandler = require("express-async-handler")


// Get Product All
Route.get('/get/allProduct', asyncHandler(async (req, res) => {

    const allProduct = await productSchema.find({});
    res.json(allProduct)

}))
// Get Single Product
Route.get("/get/singleProduct/:id", asyncHandler(async (req, res) => {
    const product = await productSchema.find({})
    const single = product.find(pd => pd._id == req.params.id)
    if (single) {
        res.json(single)
    } else { res.json({ error: "404 Product Note Found" }) }
}))


module.exports = Route