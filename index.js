const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const Phone = require("./Schema/mobile.model");
const app = express();
const port = 3000;

// hkH4M20NT2GBVnwA
// mobile_order
// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://mobile_order:hkH4M20NT2GBVnwA@cluster0.y5jebou.mongodb.net/mobile_order?retryWrites=true&w=majority";

mongoose
  .connect(uri, {})
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.get("/api/v1/phone", async (req, res) => {
  const result = await Phone.find();
  res.send(result);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
