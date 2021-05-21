const routeNotFound = (req, res, next) => {
  res.json({
    success: false,
    errorMessage: "The requested URL doesn't exist on this server :(",
  });
};

module.exports = { routeNotFound };
