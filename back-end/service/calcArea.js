module.exports = ({
  wallHeight, wallLength, doors, windows,
}) => {
  const doorArea = 1.52;
  const windowArea = 2.4;

  const area = ((wallHeight) * (wallLength))
  - ((doors) * doorArea + (windows) * windowArea);

  return area;
};
