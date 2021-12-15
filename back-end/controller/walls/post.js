const { calcArea } = require('../../service/calcArea');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const {
      wallOneHeight, wallOneLength,
      wallTwoHeight, wallTwoLength,
      wallThreeHeight, wallThreeLength,
      wallFourHeight, wallFourLength,
    } = req.body;
    const dimensions = {
      wallOneHeight,
      wallOneLength,
      wallTwoHeight,
      wallTwoLength,
      wallThreeHeight,
      wallThreeLength,
      wallFourHeight,
      wallFourLength,
    };

    return res.status(200).json({ total: calcArea(dimensions) });
  } catch (err) {
    next(err);
  }
};
