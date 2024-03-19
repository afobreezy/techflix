const User = require("../models/userModel");



const getCurrentUser = async (id) => {
  const currentUser = await User.findOne({ _id: id }).select("-password");

  if (currentUser) {
    return currentUser;
  }
};

module.exports = {  getCurrentUser };
