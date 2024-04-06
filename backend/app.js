const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//headers

//main app
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({ path: "./config.env" });

//middlewares

//db connection
require("./DB/conn");

//api
app.use("/api", require("./Api/api"));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("welcome to the backend ");
});
app.listen(PORT, (req, res) => {
  console.log(`listening on PORT ${PORT}`);
});
