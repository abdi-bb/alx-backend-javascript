export default function cleanSet(set, startString) {
  const cleanedValues = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      cleanedValues.push(item.slice(startString.length));
    }
  }
  return cleanedValues.join('-');
}
