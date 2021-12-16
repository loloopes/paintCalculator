const Joi = require('joi');

module.exports = async (req, res, next) => {
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

  const wallOne = Number(wallOneHeight) * Number(wallOneLength);
  const wallTwo = Number(wallTwoHeight) * Number(wallTwoLength);
  const wallThree = Number(wallThreeHeight) * Number(wallThreeLength);
  const wallFour = Number(wallFourHeight) * Number(wallFourLength);

  const areaDoorsWindowsOne = Number(doorsOne) * doorArea + Number(windowsOne) * windowArea;
  const areaDoorsWindowsTwo = Number(doorsTwo) * doorArea + Number(windowsTwo) * windowArea;
  const areaDoorsWindowsThree = Number(doorsThree) * doorArea + Number(windowsThree) * windowArea;
  const areaDoorsWindowsFour = Number(doorsFour) * doorArea + Number(windowsFour) * windowArea;

  const walls = {
    wallOne,
    wallTwo,
    wallThree,
    wallFour,
  };

  const doorsWindows = {
    areaDoorsWindowsOne,
    areaDoorsWindowsTwo,
    areaDoorsWindowsThree,
    areaDoorsWindowsFour,
  };

  const validateWall = Joi.object({
    wallOne: Joi.number().min(1).max(15).required(),
    wallTwo: Joi.number().min(1).max(15).required(),
    wallThree: Joi.number().min(1).max(15).required(),
    wallFour: Joi.number().min(1).max(15).required(),
  }).validate(walls);

  if (validateWall.error) return next(validateWall.error);

  const validateDoorsWindows = Joi.object({
    areaDoorsWindowsOne: Joi.number().max(wallOne * 0.5).required(),
    areaDoorsWindowsTwo: Joi.number().max(wallTwo * 0.5).required(),
    areaDoorsWindowsThree: Joi.number().max(wallThree * 0.5).required(),
    areaDoorsWindowsFour: Joi.number().max(wallFour * 0.5).required(),
  }).validate(doorsWindows);

  if (validateDoorsWindows.error) return next(validateDoorsWindows.error);

  if (doorsOne > 0) {
    const mySchema = Joi.number().min(2.2).required().label('wallOneHeight');
    const { error } = mySchema.validate(wallOneHeight);

    if (error) return next(error);
  }

  if (doorsTwo > 0) {
    const mySchema = Joi.number().min(2.2).required();
    const { error } = mySchema.validate(wallTwoHeight);

    if (error) return next(error);
  }

  if (doorsThree > 0) {
    const mySchema = Joi.number().min(2.2).required();
    const { error } = mySchema.validate(wallThreeHeight);

    if (error) return next(error);
  }

  if (doorsFour > 0) {
    const mySchema = Joi.number().min(2.2).required();
    const { error } = mySchema.validate(wallFourHeight);

    if (error) return next(error);
  }

  next();
};
