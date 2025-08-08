const express = require("express");
const upload = require("../upload");

const router = express.Router();
const {
  createWorker,
  getWorkers,
  deleteWorker,
  setWorkerUnavailable,
} = require("../controllers/workerController");

router.post("/", upload.single("cv"), createWorker);
router.get("/", getWorkers);
router.delete("/:id", deleteWorker);
router.patch("/:id/unavailable", setWorkerUnavailable);

module.exports = router;
