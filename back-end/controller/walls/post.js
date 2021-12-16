const { calcCans } = require('../../service/calcCans');

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

    return res.status(200).json({ total: calcCans(dimensions) });
  } catch (err) {
    next(err);
  }
};
