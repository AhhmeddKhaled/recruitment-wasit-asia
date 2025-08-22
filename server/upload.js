const multer = require("multer");
const path = require("path");
const fs = require("fs");

function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folderPath;

    if (file.fieldname === "img") {
      folderPath = path.join(__dirname, "uploads/images");
    } else if (file.fieldname === "cv") {
      folderPath = path.join(__dirname, "uploads/cvs");
    }

    ensureDirExists(folderPath);

    cb(null, folderPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // الاسم النهائي
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf" || file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("الملف المرفوع يجب أن يكون PDF أو صورة"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
