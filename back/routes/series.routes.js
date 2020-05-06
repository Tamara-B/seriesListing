const express = require("express");
const router = express.Router();
const seriesController = require("../controllers/series.controller");

router.post("/", seriesController.createSeries);
router.get("/", seriesController.getSerieses);
router.get("/:id", seriesController.getSeriesById);
router.delete("/:id", seriesController.deleteSeries);
router.patch("/:id", seriesController.updateSeries);

module.exports = router;
