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

  const area = (Number(wallOneHeight) * Number(wallOneLength)
  + Number(wallTwoHeight) * Number(wallTwoLength)
  + Number(wallThreeHeight) * Number(wallThreeLength)
  + Number(wallFourHeight) * Number(wallFourLength))
  - (Number(doorsOne) * doorArea + Number(windowsOne) * windowArea
    + Number(doorsTwo) * doorArea + Number(windowsTwo) * windowArea
    + Number(doorsThree) * doorArea + Number(windowsThree) * windowArea
    + Number(doorsFour) * doorArea + Number(windowsFour) * windowArea);

  return area;
};

module.exports = { calcArea };
