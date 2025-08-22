const express = require("express");
const router = express.Router({ mergeParams: true });
const workerController = require("../controllers/workerController");
const upload = require("../upload");

router.post("/",upload.single("cv"), workerController.createWorker);
router.get("/", workerController.getWorkers);
router.delete("/:id", workerController.deleteWorker);
router.patch("/:id/unavailable", workerController.setWorkerUnavailable);

module.exports = router;
