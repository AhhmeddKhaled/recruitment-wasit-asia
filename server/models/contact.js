const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true}
})

module.exports = mongoose.model("Contact",contact);