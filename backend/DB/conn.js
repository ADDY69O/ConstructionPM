const mongoose = require("mongoose");

const CONN_URL = process.env.DB_CONN;

mongoose,
  mongoose
    .connect(CONN_URL)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => console.log(err));
