const Worker = require("../models/Worker");
const LocalWorker = require("../models/localWorker");

// دالة مساعدة لتحديد أي موديل هنستخدم
const getModel = (type) => {
  if (type === "local") return LocalWorker;
  return Worker; // default الاستقدام
};

// إنشاء عامل جديد
exports.createWorker = async (req, res) => {
  try {
    const Model = getModel(req.params.type);
    console.log(req.params.type);
    
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

// الحصول على كل العمال مع فلترة
exports.getWorkers = async (req, res) => {
  try {
    const Model = getModel(req.params.type);
    const filter = {};

    // العمر (كـ range)
    if (req.query.age) {
      const [minAge, maxAge] = req.query.age.split("-").map(Number);
      filter.age = { $gte: minAge, $lte: maxAge };
    }

    // الوظيفة
    if (req.query.job && req.query.job !== "الكل") {
      filter.job = req.query.job;
    }

    // الديانة
    if (req.query.religion && req.query.religion !== "الكل") {
      filter.religion = req.query.religion;
    }

    // الخبرة
    if (req.query.experience && req.query.experience !== "الكل") {
      filter.experience = req.query.experience;
    }

    // الجنسية
    if (req.query.nationality && req.query.nationality !== "الكل") {
      filter.nationality = req.query.nationality;
    }

    // المهارات (خاص بعُمال نقل الكفالة)
    if (req.query.skills && req.query.skills !== "الكل") {
      filter.skills = req.query.skills;
    }

    // فقط المتاحين
    filter.isAvailable = true;

    const workers = await Model.find(filter);
    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء جلب البيانات" });
  }
};

// حذف عامل
exports.deleteWorker = async (req, res) => {
  try {
    const Model = getModel(req.params.type);

    await Model.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "تم حذف العامل" });
  } catch (err) {
    res.status(500).json({ message: "خطأ في الحذف", err });
  }
};

// تعديل حالة التوفر
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
