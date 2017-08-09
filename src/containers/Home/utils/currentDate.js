const currentDate = (offset) => {
  // get client's current date
  const date = new Date();

  // turn date to utc
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);

  // set new Date object
  return new Date(utc + (3600000 * offset));
};

export default currentDate;
