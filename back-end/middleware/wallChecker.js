/* eslint-disable consistent-return */
const Joi = require('joi');

module.exports = async (req, _res, next) => {
  const doorArea = 1.52;
  const windowArea = 2.4;

  const data = req.body;

  const numberfiedData = data.map(({
    wallHeight, wallLength, doors, windows,
  }) => ({
    numberWallHeight: Number(wallHeight),
    numberWallLength: Number(wallLength),
    numberDoors: Number(doors),
    numberWindows: Number(windows),
  }));

  const walls = numberfiedData.map((wall) => ({
    wallArea: wall.numberWallHeight * wall.numberWallLength,
    doorsWindowsArea: wall.numberDoors * doorArea + wall.numberWindows * windowArea,
  }));

  const dataSchema = Joi.array().items(Joi.object({
    numberWallHeight: Joi.alternatives().conditional('numberDoors', { is: 0, then: Joi.number().min(0.0000001).required().messages({ 'number.empty': 'o campo altura da parede nao pode ser vazio', 'number.min': 'o campo altura da parede deve ser maior que 0' }), otherwise: Joi.number().min(2.2).required().messages({ 'number.empty': 'Altura da parede nao pode ser um campo vazio', 'number.min': 'Quando ha portas, paredes devem ter no minimo 2.2m de altura' }) }),
    numberWallLength: Joi.number().min(0.0000001).required().messages({ 'number.min': 'largura deve ser maior que 0', 'number.base': 'largura deve ser um numero' }),
    numberDoors: Joi.number().min(0).required().messages({ 'number.min': 'portas deve ser um numero, mesmo que 0', 'number.empty': 'Campo portas nao pode ser vazio' }),
    numberWindows: Joi.number().min(0).required().messages({ 'number.min': 'janelas deve ser um numero, mesmo que 0', 'number.base': 'Janelas deve ser um numero, mesmo que 0' }),
  }));

  const wallsSchema = Joi.array().items(Joi.object({
    wallArea: Joi.number().min(1).max(15).required()
      .messages({ 'number.min': 'area da parede deve no minimo 1m²', 'number.max': 'Area da parede nao pode exceder 15m' }),
    doorsWindowsArea: Joi.number().max(Joi.ref('wallArea', {
      adjust: (value) => value * 0.5,
    })).required().messages({ 'number.max': 'area de portas e janelas somadas devem corresponder a no maximo 50% da area de parede' }),
  }));

  const dataCheck = dataSchema.validate(numberfiedData);

  if (dataCheck.error) return next(dataCheck.error);

  const wallsCheck = wallsSchema.validate(walls);

  if (wallsCheck.error) return next(wallsCheck.error);

  next();
};
