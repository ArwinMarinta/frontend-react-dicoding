export const ConvertTime = (createAt) => {
  const date = new Date(createAt);

  const options = {
    timeZone: "Asia/Bangkok",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("id-ID", options).format(date); // Format sesuai lokal Indonesia
};
