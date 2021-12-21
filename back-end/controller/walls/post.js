const { calcCans } = require('../../service/calcCans');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const data = req.body;
    const cans = calcCans(data);
    return res.status(200).json(cans);
  } catch (err) {
    next(err);
  }
};
