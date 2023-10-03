export default function cleanSet(set, startString) {
  const cleanedValues = [];

  if (startString.length === 0) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      cleanedValues.push(item.slice(startString.length));
    }
  }
  return cleanedValues.join('-');
}
