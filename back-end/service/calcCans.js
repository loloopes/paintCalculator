const calcCans = (info) => {
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
  } = info;

  const wallOne = Number(wallOneHeight) * Number(wallOneLength)
  - (Number(doorsOne) * doorArea + Number(windowsOne) * windowArea);

  const wallTwo = Number(wallTwoHeight) * Number(wallTwoLength)
  - (Number(doorsTwo) * doorArea + Number(windowsTwo) * windowArea);

  const wallThree = Number(wallThreeHeight) * Number(wallThreeLength)
  - (Number(doorsThree) * doorArea + Number(windowsThree) * windowArea);

  const wallFour = Number(wallFourHeight) * Number(wallFourLength)
  - (Number(doorsFour) * doorArea + Number(windowsFour) * windowArea);

  let area = wallOne + wallTwo + wallThree + wallFour;

  let xLarge = null;
  let large = null;
  let medium = null;
  let small = null;

  xLarge = parseInt(area / (18 * 5), 10);

  if (xLarge) area -= xLarge * (18 * 5);

  large = parseInt(area / (3.6 * 5), 10);

  if (large) area -= large * (3.6 * 5);

  medium = parseInt(area / (2.5 * 5), 10);

  if (medium) area -= medium * (2.5 * 5);

  small = area % 0.5 > 0 ? parseInt(area / (0.5 * 5), 10) + 1 : area / (0.5 * 5);

  const cans = {
    xLarge,
    large,
    medium,
    small,
  };

  return cans;
};

module.exports = { calcCans };