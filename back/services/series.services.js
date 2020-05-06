const SeriesSchema = require("../models/series.model");

const createSeries = async (reqBody) => {
  const series = await SeriesSchema.create(reqBody);
  return series;
};

const getSerieses = async () => {
  const serieses = await SeriesSchema.find();
  return serieses;
};

const getSeriesById = async (seriesId) => {
  const series = await SeriesSchema.findById(seriesId);
  if (!series) {
    throw new Error("Not found");
  }
  return series;
};

const deleteSeries = async (todoId) => {
  const series = await getSeriesById(seriesId);
  await series.remove();
  return series;
};

const updateSeries = async (seriesId, updateParam) => {
  const series = await getSeriesById(seriesId);
  Object.assign(series, updateParam);
  series.save();
  return series;
};

module.exports = {
  createSeries,
  getSerieses,
  getSeriesById,
  deleteSeries,
  updateSeries,
};
