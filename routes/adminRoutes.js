const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
  deleteHospitalController,
  deleteOrgController,
} = require("../controllers/adminController");
const adminMiddelware = require("../middlewares/adminMiddelware");

// ROUTER OBJECT
const router = express.Router();

// ROUTES

// GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddelware,
  adminMiddelware,
  getDonarsListController
);

// GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddelware,
  getHospitalListController
);

// GET || ORG LIST
router.get("/org-list", authMiddelware, adminMiddelware, getOrgListController);

// ============ DELETE ROUTES =============
// DELETE DONAR
router.delete(
  "/delete-donar/:id",
  authMiddelware,
  adminMiddelware,
  deleteDonarController
);

// DELETE HOSPITAL
router.delete(
  "/delete-hospital/:id",
  authMiddelware,
  adminMiddelware,
  deleteHospitalController
);

// DELETE ORGANISATION
router.delete(
  "/delete-org/:id",
  authMiddelware,
  adminMiddelware,
  deleteOrgController
);

// EXPORT
module.exports = router;
