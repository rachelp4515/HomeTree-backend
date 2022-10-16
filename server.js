require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
app.use(bodyParser.json());
app.use(cookieParser());
require("./data/hometree-db");

app.use(cors({ origin: process.env.ORIGIN, credentials: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Set db
require("./data/hometree-db");

// just a test route
app.get("/", (req, res) => {
  console.log("test");

  res.json({ message: "Ayo" });
});

//import model
const Prop = require("./models/property");
app.post("/create-prop", (req, res) => {
  console.log(req.body);
  // make prop
  // save prop
  // send response
  // lazy error 'handling'
  const prop = new Prop(req.body);
  prop
    .save()
    .then(() => res.json({ propId: prop._id }))
    .catch((err) => {
      console.log(err);
    });
});

