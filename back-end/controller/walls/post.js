const { calcArea } = require('../../service/calcArea');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const {
      wallOneHeight, wallOneLength,
      doorsOne, windowsOne,
      wallTwoHeight, wallTwoLength,
      doorsTwo, windowsTwo,
      wallThreeHeight, wallThreeLength,
      doorsThree, windowsThree,
      wallFourHeight, wallFourLength,
      doorsFour, windowsFour,
    } = req.body;
    const dimensions = {
      wallOneHeight,
      wallOneLength,
      doorsOne,
      windowsOne,
      wallTwoHeight,
      wallTwoLength,
      doorsTwo,
      windowsTwo,
      wallThreeHeight,
      wallThreeLength,
      doorsThree,
      windowsThree,
      wallFourHeight,
      wallFourLength,
      doorsFour,
      windowsFour,
    };

    return res.status(200).json({ total: calcArea(dimensions) });
  } catch (err) {
    next(err);
  }
};
