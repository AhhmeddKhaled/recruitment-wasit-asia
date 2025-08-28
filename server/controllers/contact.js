const Contact = require("../models/contact");

exports.createContact = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const exists = await Contact.findOne({ phone });
    if (exists)
      return res.status(400).json({ message: "هذا الرقم موجود بالفعل" });

    const contact = await Contact.create({ name, phone });
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(201).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteContact = async (req,res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "تم حذف الرقم بنجاح"})
  } catch(err) {
    res.status(500).json({message: err.message})
  }
}