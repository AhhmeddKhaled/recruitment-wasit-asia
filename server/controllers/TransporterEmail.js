const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// إعدادات الإرسال
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

// ✅ 1. Route لحجز سيرة ذاتية
router.post("/resume", async (req, res) => {
  const { worker, user } = req.body;

  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: "wasitasia8@gmail.com",
      subject: "حجز سيرة ذاتية جديدة",
      html: `
        <div dir="rtl" style="text-align:right; font-family:Tahoma, Arial; font-size:16px;">
          قام العميل <strong>${user.name}</strong> صاحب الرقم <strong>${user.phone}</strong>
          بحجز السيرة الذاتية للعامل رقم <strong>${worker._id}</strong>.
          <hr />

          <p>بيانات العميل:</p>
          الإسم : <strong>${user.name}</strong><br />
          رقم الهاتف : <strong>${user.phone}</strong><br />
          الإيميل : <strong>${user.email}</strong>

          <hr />

          <p> بيانات العامل:</p>
          رقم السيرة الذاتية : <strong>${worker._id}</strong><br />
          الإسم : <strong>${worker.name}</strong><br />
          العمر : <strong>${worker.age}</strong><br />
          المهنة : <strong>${worker.job}</strong><br />
          الجنسية : <strong>${worker.nationality}</strong>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 
    
  `تم حجز السيرة الذاتية بنجاح 
  سيتواصل معك فريقنا في اقرب وقت,
   شكرا لتعاملك مع وسيط أسيا` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "حدث خطأ أثناء الإرسال" });
  }
});

// ✅ 2. Route لنموذج التواصل
router.post("/", async (req, res) => {
  const { name, email, subject, phone, message } = req.body;
console.log("🔔 بيانات جايه من الواجهة:", req.body); // 👈 اتأكد من هنا
  try {    
    const mailOptions = {
      from: `"${name}" <${email || "no-reply@wasit.com"}>`,
      to: "wasitasia8@gmail.com",
      subject: "رسالة جديدة من نموذج التواصل",
      html: `
        <div dir="rtl" style="text-align:right; font-family:Tahoma, Arial; font-size:16px;">
          <p>قام أحد الزوار بإرسال رسالة من نموذج التواصل:</p>
          <hr />
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>رقم الهاتف:</strong> ${phone || 'غير مذكور'}</p>
          <p><strong>الموضوع:</strong> ${subject}</p>
          <p><strong>الرسالة:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "تم إرسال الرسالة بنجاح" });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, message: "حدث خطأ أثناء إرسال الرسالة" });
  }
});

module.exports = router;
