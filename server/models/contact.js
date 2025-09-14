const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    phone: {type: String, required: true},
    role: {type: String, required: true},
})

module.exports = mongoose.model("Contact",contact);