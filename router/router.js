const express = require("express")
const router = express.Router()
const controllerget = require("../controller/Controllerget")
const controllerpost = require("../controller/Controllerpost")
// const controllergetData = require("../controller/ControllergetData")


router.post("/api/leadform", controllerpost.postlead)
router.post("/api/client", controllerpost.postaddclient)

router.get("/api/leadform", controllerget.getlead)
router.get("/api/client", controllerget.getclient)





module.exports = router