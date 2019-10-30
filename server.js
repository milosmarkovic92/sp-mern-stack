const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const mongoose = require("mongoose");

const app = express();
const port = process.env.port || 5000;

// // connect with database
mongoose.connect("mongodb://localhost/south-park");

app.use(express.static("../client/public"));

// // middleware to get body of input from post request
app.use(bodyParser.json());

// // middleware to attach routes to root route /api
app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
