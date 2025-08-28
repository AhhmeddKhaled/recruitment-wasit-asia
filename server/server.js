// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();


// ميدل وير
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// اتصال بقاعدة البيانات
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.log("❌ DB Error: ", err));

const countryRoutes = require("./routes/country");
app.use("/api/countries", countryRoutes);


const workerRoutes = require('./routes/Workers')
app.use("/api/workers/:type", workerRoutes);

const articalRoutes = require('./routes/artical');
app.use("/api/articals", articalRoutes)

app.use('/api/auth', require('./routes/authRoutes'));

const transporterEmailRoutes = require("./controllers/TransporterEmail");
app.use("/api/notify-owner", transporterEmailRoutes);

const contact = require("./routes/contact");
app.use("/api/contact",contact);

// استماع
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



