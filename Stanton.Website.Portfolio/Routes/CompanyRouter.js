const express = require("express");
const companyController = require("../Controllers/CompanyController");
const router = express.Router();

router.get("/companies", companyController.companyList);
router.get("/company/:name", companyController.companySelect);

module.exports = router