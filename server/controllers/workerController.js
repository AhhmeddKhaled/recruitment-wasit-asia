const Worker = require("../models/Worker");
const LocalWorker = require("../models/localWorker");

const getModel = (type) => {
  if (type === "local") return LocalWorker;
  return Worker;
};

exports.createWorker = async (req, res) => {
  try {
    const Model = getModel(req.params.type);
    
    const cv = req.file ? `/uploads/cvs/${req.file.filename}` : null;

    const newWorker = new Model({
      ...req.body,
      cv,
    });

    await newWorker.save();
    res.status(201).json({
      newWorker,
      message: "تم إضافة العامل بنجاح",
    });
  } catch (err) {
    res.status(500).json({ message: "خطأ في إضافة العامل", error: err.message });
  }
};

exports.getWorkers = async (req, res) => {
  try {
    const Model = getModel(req.params.type);
    
    const filter = {};

    if (req.query.age) {
      const [minAge, maxAge] = req.query.age.split("-").map(Number);
      filter.age = { $gte: minAge, $lte: maxAge };
    }

    if (req.query.job && req.query.job !== "الكل") {
      filter.job = req.query.job;
    }

    if (req.query.religion && req.query.religion !== "الكل") {
      filter.religion = req.query.religion;
    }

    if (req.query.experience && req.query.experience !== "الكل") {
      filter.experience = req.query.experience;
    }

    if (req.query.nationality && req.query.nationality !== "الكل") {
      filter.nationality = req.query.nationality;
    }

    if (req.query.skills && req.query.skills !== "الكل") {
      filter.skills = req.query.skills;
    }

    filter.isAvailable = true;

    const workers = await Model.find(filter);
    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء جلب البيانات" });
  }
};

exports.deleteWorker = async (req, res) => {
  try {
    const Model = getModel(req.params.type);

    await Model.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "تم حذف العامل" });
  } catch (err) {
    res.status(500).json({ message: "خطأ في الحذف", err });
  }
};

exports.setWorkerUnavailable = async (req, res) => {
  try {
    const Model = getModel(req.params.type);

    const worker = await Model.findByIdAndUpdate(
      req.params.id,
      { isAvailable: false },
      { new: true }
    );
    res.status(200).json(worker);
  } catch (err) {
    res.status(500).json({ message: "فشل تحديث الحالة", error: err });
  }
};
