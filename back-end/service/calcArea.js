const calcArea = (info) => {
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

  let area = (Number(wallOneHeight) * Number(wallOneLength)
  + Number(wallTwoHeight) * Number(wallTwoLength)
  + Number(wallThreeHeight) * Number(wallThreeLength)
  + Number(wallFourHeight) * Number(wallFourLength))
  - (Number(doorsOne) * doorArea + Number(windowsOne) * windowArea
    + Number(doorsTwo) * doorArea + Number(windowsTwo) * windowArea
    + Number(doorsThree) * doorArea + Number(windowsThree) * windowArea
    + Number(doorsFour) * doorArea + Number(windowsFour) * windowArea);
  // const test = area;
  let xLarge = null;
  let large = null;
  let medium = null;
  let small = null;

  xLarge = parseInt(area / 18, 10);

  if (xLarge) area -= xLarge * 18;

  large = parseInt(area / 3.6, 10);

  if (large) area -= large * 3.6;

  medium = parseInt(area / 2.5, 10);

  if (medium) area -= medium * 2.5;

  small = area % 0.5 > 0 ? parseInt(area / 0.5, 10) + 1 : area / 0.5;

  const latas = {
    xLarge,
    large,
    medium,
    small,
  };
  // console.log(latas);

  return latas;
};

module.exports = { calcArea };
