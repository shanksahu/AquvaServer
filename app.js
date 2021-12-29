const express = require("express")
const app = express()
const port = 3000
const bodyparser = require("body-parser")
//import
const router = require("./router/router")
require("./mongoose/Mongoose.connection")
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "*")
    }
    next()
})

// app.get("/", (req, res)=>{
//     res.send("Hello there this is my website")
// })
app.use("/", router)

app.listen(port, ()=>{
    console.log(`server is connected at ${port}`);
})
