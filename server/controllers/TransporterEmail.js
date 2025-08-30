const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { worker, user } = req.body;
  
  try {
    // إعداد الإيميل
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ahmedkhaled7229@gmail.com", 
        pass: "xmgt zggp itpc ejnr",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "ahmedkhaledhr429@gmail.com",
      subject: "حجز سيرة ذاتية جديدة",
       html: `
    <div dir="rtl" style="text-align:right; font-family:Tahoma, Arial; font-size:16px;">
      قام العميل  <strong>${user.name}</strong> صاحب الرقم <strong>${user.phone}</strong>
      بحجز السيرة الذاتية للعامل رقم <strong>${worker._id}</strong>.
      <hr />

      <p>بيانات العميل:</p>
      الإسم : <strong>${user.name}</strong>
        <br />
      رقم الهاتف :  <strong>${user.phone}</strong>
        <br />
      الإيميل : <strong>${user.email}</strong>

      <hr />

      <p> بيانات العامل:</p>
        رقم السيرة الذاتية : <strong>${worker._id}</strong>
        <br />
        الإسم : <strong>${worker.name}</strong>
        <br />
        العمر : <strong>${worker.age}</strong>
        <br />
        المهنة : <strong>${worker.job}</strong>
        <br />
        الجنسية : <strong>${worker.nationality}</strong>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "تم إرسال البيانات بنجاح" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "حدث خطأ أثناء الإرسال" });
  }
});

module.exports = router;
