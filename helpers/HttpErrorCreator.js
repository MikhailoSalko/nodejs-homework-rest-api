const HttpErrorCreator = (status, message) => {
  const er = new Error(message);
  er.status = status;
  return er;
};

export default HttpErrorCreator;
