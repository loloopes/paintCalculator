/* eslint-disable consistent-return */
const Joi = require('joi');

module.exports = async (req, _res, next) => {
  const doorArea = 1.52;
  const windowArea = 2.4;

  const data = req.body;

  const walls = data.map((wall) => ({
    wallArea: Number(wall.wallHeight) * Number(wall.wallLength),
    doorsWindowsArea: Number(wall.doors) * doorArea + Number(wall.windows) * windowArea,
  }));

  const dataSchema = Joi.array().items(Joi.object({
    wallHeight: Joi.alternatives().conditional('doors', { not: 0, then: Joi.number().min(2.2).required(), otherwise: Joi.number().required() }),
    wallLength: Joi.number().min(0).required().messages({ 'number.min': 'parede deve ser maior que 0' }),
    doors: Joi.number().min(0).required().messages({ 'number.base': 'portas deve ser um numero, mesmo que 0' }),
    windows: Joi.number().min(0).required().messages({ 'number.min': 'area da parede deve ser maior que 0', 'number.base': 'Janelas deve ser um numero, mesmo que 0' }),

  }));

  const wallsSchema = Joi.array().items(Joi.object({
    wallArea: Joi.number().min(1).max(15).required()
      .messages({ 'number.min': 'area da parede deve ser maior que 0', 'number.max': 'Area da parede nao pode exceder 15m²' }),
    doorsWindowsArea: Joi.number().max(Joi.ref('wallArea', {
      adjust: (value) => value * 0.5,
    })).required().messages({ 'number.max': 'area de portas e janelas somadas devem corresponder a no maximo 50% da area de parede' }),
  }));

  const dataCheck = dataSchema.validate(data);

  if (dataCheck.error) return next(dataCheck.error);

  const wallsCheck = wallsSchema.validate(walls);

  if (wallsCheck.error) return next(wallsCheck.error);

  next();
};
