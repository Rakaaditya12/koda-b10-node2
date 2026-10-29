import moment from "moment";

function convertDate(input) {
  if (!moment().isValid()) {
    console.log("format tanggal salah");
    return;
  } else {
    const resMoments = moment(input, "DD-MM-YYYY").format("DD/MM/YYYY");

    return resMoments;
  }
}

export default convertDate;
