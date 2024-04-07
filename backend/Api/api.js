const express = require("express");
const router = express.Router();
const userRoutes = require("../Routes/userRoutes");
const projectRoutes = require("../Routes/projectRoutes");

router.use("/user", userRoutes);
router.use("/project", projectRoutes);

module.exports = router;
