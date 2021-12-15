const calcArea = (info) => {
  const {
    wallOneHeight, wallOneLength,
    wallTwoHeight, wallTwoLength,
    wallThreeHeight, wallThreeLength,
    wallFourHeight, wallFourLength,
  } = info;

  const area = Number(wallOneHeight) * Number(wallOneLength)
  + Number(wallTwoHeight) * Number(wallTwoLength)
  + Number(wallThreeHeight) * Number(wallThreeLength)
  + Number(wallFourHeight) * Number(wallFourLength);

  return area;
};

module.exports = { calcArea };
