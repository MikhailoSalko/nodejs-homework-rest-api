const HttpError = (status, message) => {
  const er = new Error();
  er.status = status;
  er.message = message;
  return er;
};

export default HttpError;
