const routeNotFound = (req, res, next) => {
  res.json({
    success: false,
    errorMessage: "The requested URL doesn't exits on this server :(",
  });
};

module.exports = { routeNotFound };
