const calcArea = require('./calcArea');

const calcCans = ({
  wallOneHeight, wallOneLength,
  doorsOne, windowsOne,
  wallTwoHeight, wallTwoLength,
  doorsTwo, windowsTwo,
  wallThreeHeight, wallThreeLength,
  doorsThree, windowsThree,
  wallFourHeight, wallFourLength,
  doorsFour, windowsFour,
}) => {
  const wallOne = calcArea({
    wallHeight: wallOneHeight, wallLength: wallOneLength, doors: doorsOne, windows: windowsOne,
  });

  const wallTwo = calcArea({
    wallHeight: wallTwoHeight, wallLength: wallTwoLength, doors: doorsTwo, windows: windowsTwo,
  });

  const wallThree = calcArea({
    wallHeight: wallThreeHeight,
    wallLength: wallThreeLength,
    doors: doorsThree,
    windows: windowsThree,
  });

  const wallFour = calcArea({
    wallHeight: wallFourHeight, wallLength: wallFourLength, doors: doorsFour, windows: windowsFour,
  });

  let area = wallOne + wallTwo + wallThree + wallFour;

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
