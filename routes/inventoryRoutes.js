const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalsController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes

// ADD INVENTORY || POST
router.post("/create-inventory", authMiddelware, createInventoryController);

// GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddelware, getInventoryController);

// GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddelware,
  getRecentInventoryController
);

// POST HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddelware,
  getInventoryHospitalController
);

// GET DONAR RECORDS
router.get("/get-donars", authMiddelware, getDonarsController);

// GET HOSPITALS RECORDS
router.get("/get-hospitals", authMiddelware, getHospitalsController);

// GET ORGANISATION RECORDS
router.get("/get-organisation", authMiddelware, getOrganisationController);

// GET ORGANISTION FOR HOSPITAL
router.get(
  "/get-organisation-for-hospital",
  authMiddelware,
  getOrganisationForHospitalController
);

module.exports = router;
