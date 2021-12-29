const AquvaRolead = require("../module/Schemaleadform")
const AquvaRoclient = require("../module/SchemaClient")
const path = require("path")



exports.getlead = async (req, res)=>{
    var send = await AquvaRolead.find()
    res.status(201).send(send)
}

exports.getclient = async (req, res)=>{
    var send = await AquvaRoclient.find()
    res.status(201).send(send)
}