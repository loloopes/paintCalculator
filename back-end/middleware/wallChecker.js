const Joi = require('joi');

module.exports = async (req, _res, next) => {
  const doorArea = 1.52;
  const windowArea = 2.4;

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

  const wallOne = Number(wallOneHeight) * Number(wallOneLength)
  - (Number(doorsOne) * doorArea + Number(windowsOne) * windowArea);

  const wallTwo = Number(wallTwoHeight) * Number(wallTwoLength)
  - (Number(doorsTwo) * doorArea + Number(windowsTwo) * windowArea);

  const wallThree = Number(wallThreeHeight) * Number(wallThreeLength)
  - (Number(doorsThree) * doorArea + Number(windowsThree) * windowArea);

  const wallFour = Number(wallFourHeight) * Number(wallFourLength)
  - (Number(doorsFour) * doorArea + Number(windowsFour) * windowArea);

  const walls = {
    wallOne,
    wallTwo,
    wallThree,
    wallFour,
  };

  const { error } = Joi.object({
    wallOne: Joi.number().min(1).max(15),
    wallTwo: Joi.number().min(1).max(15),
    wallThree: Joi.number().min(1).max(15),
    wallFour: Joi.number().min(1).max(15),
  }).validate(walls);

  if (error) return next(error);

  next();
}