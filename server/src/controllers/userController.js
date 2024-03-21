

const getMe = async (req, res) => {
  try {
  
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = { getMe };
