const mongoose = require("mongoose")
const dotenv = require("dotenv")
// dotenv.config({path: "./config.env"})

const database = mongoose.connect("mongodb+srv://shank:shank@cluster0.4ws36.mongodb.net/login?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
        console.log("Database is connected");
}).catch((e)=>{
    console.log(e);
})
 
module.exports = database