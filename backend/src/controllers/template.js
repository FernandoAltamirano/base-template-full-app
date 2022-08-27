const { Template } = require("../models");

const getAll = async (req, res, next) => {
  try {
    // const { body } = req;
    res.json({ hello: "world" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
};
