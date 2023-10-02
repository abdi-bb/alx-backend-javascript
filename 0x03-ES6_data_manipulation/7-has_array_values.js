export default function hasValuesFromArray(set, arr) {
  return arr.every((element) => set.has(element));
}
