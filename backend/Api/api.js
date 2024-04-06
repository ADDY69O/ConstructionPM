const express = require("express");
const router = express.Router();
const userRoutes = require("../Routes/userRoutes");

router.use("/user", userRoutes);

module.exports = router;
