const Artical = require("../models/artical");

exports.getArticals = async (req, res) => {
  try {
    const articals = await Artical.find().sort({ timestamp: -1 }); // الأحدث أولاً
    res.json(articals);
  } catch (error) {
    res.status(500).json({ message: "خطأ في تحميل المقالات" });
  }
};

exports.getArticalById = async (req, res) => {
  try {
    const articalId = req.params.id; // جلب الـ id من الرابط

    const artical = await Artical.findById(articalId);

    if (!artical) {
      return res.status(404).json({ message: "المقال غير موجود" });
    }

    res.json(artical);

  } catch (error) {
    res.status(500).json({
      message: "خطأ في جلب المقال",
      error: error.message
    });
  }
};


exports.createArtical = async (req, res) => {
  try {
    const img = req.file ? `/uploads/images/${req.file.filename}` : null;
    const newArtical = new Artical({
      title: req.body.title,
      paragraph: req.body.paragraph,
      img,
    });
    await newArtical.save();
    res.status(201).json(newArtical);
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطا في إنشاء المقال", error: error.message });
  }
};
