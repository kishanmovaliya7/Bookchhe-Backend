exports.apiErrorHandler = (error, req, res, next) => {
  res
    .status(500)
    .send({ success: false, message: error.message || error.toString() });
};

exports.logErrors = (err, req, res, next) => {
  next(err);
};

exports.clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
};
