const makeTimestamp = (date = new Date()) => {
  const isValidNumber = (number) => /^-?\d+$/.test(number);

  const unix = !isValidNumber(date) ? Date.parse(date) : +date;
  const utc = new Date(unix).toUTCString();

  if (!unix || utc === "Invalid Date") {
    return ({ error: "Invalid Date" });
  }

  return ({ unix, utc })
}


const timestamp = (req, res) => {
  const result = makeTimestamp(req.params.date);

  res.json(result);
}

export default timestamp;

