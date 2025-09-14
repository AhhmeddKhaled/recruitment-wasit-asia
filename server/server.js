// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();

// Test 
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const uri = "mongodb://appUser:AppStrongPass123@168.231.104.37:27017/myDatabase?authSource=myDatabase";

mongoose
.connect(uri)
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
app.use('/api/contact', transporterEmailRoutes);

const contact = require("./routes/contact");
app.use("/api/contacts",contact);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



