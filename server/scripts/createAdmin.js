// scripts/createAdmin.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    
    const existing = await User.findOne({ email: "ahmedkhaled7229@gmail.com" });
    if (existing) {
      console.log("❗ الأدمن موجود بالفعل");
      return mongoose.connection.close();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = await User.create({
      name: "Super Admin",
      email: "ahmedkhaled7229@gmail.com",
      password: hashedPassword,
      role: "admin"
    });

    
    console.log("✅ تم إنشاء الأدمن بنجاح:");
    console.log(admin);

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
})();
