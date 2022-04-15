export default function orderByProps(obj, arr = []) {
  let keys = [];
  for (const key in obj) {
    if (!arr.includes(key)) {
      keys.push(key);
    }
  }
  keys = arr.concat(keys.sort());

  const result = [];
  for (const key of keys) {
    result.push({ key, value: obj[key] });
  }
  return result;
}
