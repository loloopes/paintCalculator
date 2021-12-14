// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const {
      wallOneHeight, wallOneLength,
    // wallTwoHeight, wallTwoLength,
    // wallThreeHeight, wallThreeLength,
    // wallFourHeight, wallFourLength,
    } = req.body;

    const area = Number(wallOneHeight) * Number(wallOneLength);

    return res.status(200).json({ total: area });
  } catch (err) {
    next(err);
  }
};
