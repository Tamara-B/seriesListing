const express = require("express");
const mongoose = require("mongoose");
const app = express();
const seriesRoutes = require("./routes/series.routes");

// Connection for Mongoose
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/seriesListing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

app.use(express.json());

app.use("/seriesListing", seriesRoutes);

app.listen(5000, () => {
  console.log("app is running on 5000");
});
