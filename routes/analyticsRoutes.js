const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticsController");

const router = express.Router();

//routes

// GET BLOOD DATA RECORDS
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsController);

module.exports = router;
