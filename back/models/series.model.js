const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seriesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  id: {
    type: Number,
  },
  summary: {
    type: String,
  },
  genres: {
    type: String,
  },
});

const SeriesSchema = mongoose.model("seriesSchema", seriesSchema);
module.exports = SeriesSchema;
