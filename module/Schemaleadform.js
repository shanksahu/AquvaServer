const mongoose = require("mongoose")

var dataSchemma = mongoose.Schema({


    name: { type: String },
    email: { type: String },
    priority: { type: String },
    Assign: { type: String },
    mobileno: { type: String },
    stage: { type: String },
    source: { type: String },
    adress: { type: String },
    comment: { type: String },
    date: {type: String},
    time: { type:String},
    status: { type:String},
    assignedby: { type:String},
    createdate: {type: String, default:  new Date().toISOString().slice(0, 10)},

})
const database = new mongoose.model("leadform", dataSchemma)

module.exports = database
// name: [''],
// email: [''],
// priority: [''],
// Assign: [''],
// mobileno: [''],
// stage: [''],
// source: [''],
// adress: [''],
// comment: [''],
// date: [''],
// time: [''],