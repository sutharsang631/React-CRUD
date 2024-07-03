const express = require ("express");
const mongoose = require( "mongoose");
require("dotenv").config()
const routers = require("./routes/TaskRoute");
const core =require("cors");


const app = express();
const PORT= process.env.PORT | 5000;

app.use(express.json());
app.use(core());


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err.message))



app.use("/api", routers);

app.listen(PORT , () => console.log(`Listening at ${PORT}`))