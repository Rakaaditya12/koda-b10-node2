import { Interface } from "node:readline";

import dateMoment from "./indexDateMoment.mjs";
import dateManual from "./indexDateManual.mjs";

const readline = Interface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan tanggal (DD-MM-YYYY): ", (input) => {
  const hasildateMoment = dateMoment(input);
  const hasildateManual = dateManual(input);
  console.log("hasil dateMoment: ", hasildateMoment);
  console.log("hasil dateManual: ", hasildateManual);

  readline.close();
});
