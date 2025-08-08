const Worker = require("../models/Worker");

// إنشاء عامل جديد
exports.createWorker = async (req, res) => {
  try {
    // نحدد مسار الملف لو موجود
    const cv = req.file ? `/uploads/cvs/${req.file.filename}` : null;

    const newWorker = new Worker({
      ...req.body,   
      cv       
    });

    await newWorker.save();
    res.status(201).json(newWorker);
  } catch (err) {
    res.status(500).json({ message: "خطأ في إضافة العامل", error: err.message });
  }
};


// الحصول على كل العمال مع فلترة
exports.getWorkers = async (req, res) => {
  try {
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

    // فقط المتاحين
    filter.isAvailable = true;

    const workers = await Worker.find(filter);
    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء جلب البيانات" });
  }
};



// حذف عامل
exports.deleteWorker = async (req, res) => {
  try {
    await Worker.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "تم حذف العامل" });
  } catch (err) {
    res.status(500).json({ message: "خطأ في الحذف", err });
  }
};

// تعديل حالة التوفر
exports.setWorkerUnavailable = async (req, res) => {
  try {
    const worker = await Worker.findByIdAndUpdate(
      req.params.id,
      { isAvailable: false },
      { new: true }
    );
    res.status(200).json(worker);
  } catch (err) {
    res.status(500).json({ message: "فشل تحديث الحالة", error: err });
  }
};
