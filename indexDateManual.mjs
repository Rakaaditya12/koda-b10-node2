function convertDateManual(input) {
  const date = new Date(input);

  if (Number.isNaN(date.getTime())) {
    return "tanggal tidak valid";
  }

  const getDay = String(date.getDate()).padStart(2, "0");
  const getMonth = String(date.getMonth() + 1).padStart(2, "0");
  const getYear = date.getFullYear();

  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  return `${getDay}-${getMonth}-${getYear} ${hour}-${minutes}${second}`;
}

export default convertDateManual;
