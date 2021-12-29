const mongoose = require("mongoose")

var dataSchemma = mongoose.Schema({


    clientid: { type: String },
    name: { type: String },
    email: { type: String },
    priority: { type: String },
    Assignto: { type: String },
    mobileno: { type: String },
    stage: { type: String },
    source: { type: String },
    adress: { type: String },
    comment: { type: String },
    date: {type: String},
    time: { type:String},
    // status: { type:String},
    // assignedby: { type:String},
    createdate: {type: String, default:  new Date().toISOString().slice(0, 10)},

})
const databaseclient = new mongoose.model("clientadded", dataSchemma)

module.exports = databaseclient