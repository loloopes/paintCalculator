/* eslint-disable max-len */
// const calcArea = require('./calcArea');

const calcCans = (data) => {
  const doorArea = 2 * 1.2;
  const windowArea = 0.8 * 1.9;

  let area = data.reduce((acc, cV) => acc + (cV.wallHeight * cV.wallLength - doorArea * cV.doors - windowArea * cV.windows), 0);

  const xLarge = parseInt(area / (18 * 5), 10);
  if (xLarge) area -= xLarge * (18 * 5);

  const large = parseInt(area / (3.6 * 5), 10);
  if (large) area -= large * (3.6 * 5);

  const medium = parseInt(area / (2.5 * 5), 10);
  if (medium) area -= medium * (2.5 * 5);

  const small = area % 0.5 > 0 ? parseInt(area / (0.5 * 5), 10) + 1 : area / (0.5 * 5);

  const cans = {
    xLarge,
    large,
    medium,
    small,
  };

  return cans;
};

module.exports = { calcCans };
