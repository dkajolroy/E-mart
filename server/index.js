const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const ProductRoute = require("./Route/ProductRoute")
const DbConnect = require("./config");
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())


// Mongoose Connection
DbConnect()


// Router Setup
app.use("/api", ProductRoute)


// Listen Port 
app.listen(5000, () => {
    console.log("Start Server");
})