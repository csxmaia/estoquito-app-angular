export const removeNumberFormat = (frontNumber: string) => {
  let newNumber = frontNumber;
  newNumber = newNumber.replace('.', '');
  newNumber = newNumber.replace(',', '.');
  return newNumber;
}

export const numberFormat = (backNumber: string | number, decimalDigits: number) => {
  let newNumber = backNumber;
  if (typeof newNumber === "number") {
    newNumber = newNumber.toString()
  }
  let splitted = newNumber.split(".");

  if((splitted.length-1 > 0) && splitted[splitted.length-1].length < decimalDigits) {
    newNumber = (parseFloat(newNumber).toFixed(decimalDigits)).toString();
  }

  newNumber = newNumber.replace('.', ',');

  return newNumber;
}
