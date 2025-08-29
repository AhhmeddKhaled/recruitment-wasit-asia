const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

exports.register = async (req, res) => {
  
  try {
    const { name, phone, email, password, role } = req.body;
    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: " هذا الحساب موجود, يمكنك تسجيل الدخول" });
      
    const user = await User.create({ name, phone, email, password, role });
    res.status(201).json({
      _id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "لا يوجد حساب, قم بالتسجيل " });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "كلمة المرور غير صحيحة" });

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error('Login Error', error);
    
    res.status(500).json({ message: error.message });
  }
};

exports.getUsers = async (req,res) => {

  const users = await User.find();
  res.json(users);

} 
