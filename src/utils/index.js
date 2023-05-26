export function isObject(object) {
  console.log("object", !!Object.keys(object).length);
  return !!Object.keys(object).length;
}
