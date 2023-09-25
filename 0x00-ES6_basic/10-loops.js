export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (let value of array) {
    newArray.push( ${appendString}${value};
  }

  return newArray;
}
