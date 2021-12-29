const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})

const database = mongoose.connect(process.env.DATABASELOCAL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
        console.log("Database is connected");
}).catch((e)=>{
    console.log(e);
})
 
module.exports = database