const AquvaRolead = require("../module/Schemaleadform")
const AquvaRoclient = require("../module/SchemaClient")
const path = require("path")



exports.postlead = async (req, res)=>{
  try {
      console.log(req.body);
      
      const body = req.body;
      const user = new AquvaRolead(body);
      const save = await user.save() 
      
      // res.status(201).json({Message: "Lead Added"})
      res.status(201).send(save)
      
  } catch (error) {
      res.json({message: `internal error ${error}`})
  }
}
exports.postaddclient = async (req, res)=>{
  try {
      console.log(req.body);
      
      const body = req.body;
      const user = new AquvaRoclient(body);
      const save = await user.save() 
      
      // res.status(201).json({Message: "client added"})
      res.status(201).send(save)
      
  } catch (error) {
      res.json({message: `internal error ${error}`})
  }
}