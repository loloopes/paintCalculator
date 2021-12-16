// eslint-disable-next-line no-unused-vars
module.exports = (err, _req, res, _next) => {
  if (err.isJoi) return res.status(400).send({ error: { message: err.details[0].message } });

  console.log(err);
  res.status(500).end();
};
