const express = require("express");
const router = express.Router();
const { createProject } = require("../Controllers/projectControllers");
const protect = require("../Middlewares/protect");

router.route("/create").post(protect, createProject);

module.exports = router;
