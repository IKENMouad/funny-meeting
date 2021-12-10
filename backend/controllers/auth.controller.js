const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { email, password, name } = req.body;
  if (email && password && name) {
    const fetchedUser = await User.findOne({ email });
    if (fetchedUser) {
      return res
        .status(400)
        .send({ success: false, message: "user exist with this email " });
    } else {
      const salt = await bcrypt.genSalt(10);
      const cryptedPassword = await bcrypt.hash(password, salt);
      let user = new User({ name, email, password: cryptedPassword });
      user = await user.save();
      return res
        .status(201)
        .send({ item: user, success: user._id ? true : false });
    }
  } else {
    return res.status(400).send({ success: false });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    let user = await User.findOne({ email });
    if (user) {
      const isPassMatch = await bcrypt.compare(password, user.password);
      if (isPassMatch) {
        const userSubject = {
          email: user.email,
          name: user.name,
          id: user._id,
        };
        const token = jwt.sign(userSubject, process.env.secret);
        return res
          .header("Authorization", token)
          .status(200)
          .send({ user: userSubject, token });
      } else
        return res
          .status(400)
          .send({ success: false, message: "password not match" });
    } else
      return res
        .status(400)
        .send({ success: false, message: "user not found" });
  }
};

module.exports = {
  register,
  login,
};
