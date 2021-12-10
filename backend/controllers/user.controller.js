const User = require("../models/User");

const fetchUsers = async (req, res) => {
  const users = await User.find({});
  return res.status(200).send({ items: users, total: users.length });
};

const fetchUser = async (req, res) => {
  const { userId } = req.params;
  if (userId) {
    const user = await User.findById(userId);
    if (user) {
      return res.status(200).send({ item: user });
    } else return res.status(404).send({ item: null });
  }
};

module.exports = {
  fetchUser,
  fetchUsers,
};
