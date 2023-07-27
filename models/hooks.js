export const handleMongooseError = (er, _, next) => {
  er.status = 400;
  next();
};

export const handleRunValidators = function (next) {
  this.options.runValidators = true;
  next();
};
