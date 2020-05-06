const seriesService = require("../services/series.services");
const fetch = require("node-fetch");

const createSeries = async (req, res, next) => {
  console.log("req", req.body);
  try {
    const series = await seriesService.createSeries({
      name: req.body.title,
      image: req.body.image,
      id: req.body.id,
      summary: req.body.summary,
      genres: req.body.genres,
    });
    res.status(200).json({ result: series });
  } catch (err) {
    next(err);
  }
};

const getSerieses = async (req, res, next) => {
  try {
    function findData() {
      return fetch("http://api.tvmaze.com/shows?page=1");
    }
    const processData = async () => {
      const foundData = await findData();
      const responseData = await foundData.json();
      return responseData;
    };
    const serieses = await processData();
    res.status(200).json({ result: serieses });
    console.log({ result: serieses[0].id });
  } catch (err) {
    next(err);
  }
};

const getSeriesById = async (req, res, next) => {
  try {
    const series = await seriesService.getSeriesById(req.params.id);
    res.status(200).json({ result: series });
  } catch (err) {
    next(err);
  }
};

const deleteSeries = async (req, res, next) => {
  try {
    const series = await seriesService.deleteSeries(req.params.id);
    res.status(200).json({ result: "done", deletedseries: series });
  } catch (err) {
    next(err);
  }
};

const updateSeries = async (req, res, next) => {
  try {
    const series = await seriesService.updateSeries(req.params.id, req.body);
    res.status(200).json({ result: "done", updatedseries: series });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSeries,
  getSerieses,
  getSeriesById,
  deleteSeries,
  updateSeries,
};
