/**
 * Converts HEX color to RGB model values.
 * @param {Number[]|object|string} values - The HSL color model values array, object, or string.
 * @param {object} [parameters] - Parameters object.
 * @param {boolean} [parameters.asArray=false] - Return result as array. 
 * @returns {object|Number[]} an array containing RGB model values.
 */
export default function hex2rgb(values, { asArray = false } = {}) {

  let hex;

  // from array
  if (Array.isArray(values)) {
    if (values.length === 3) {
      hex = values;
    } else if (values.length === 1) {
      hex = new Array(3).fill(values[0]);
    } else {
      hex = [ 0, 0, 0 ];
    }
  // from string
  } else if (typeof values === "string") {
    hex = values.replace("#", "");
    // split hex string into channels
    hex = (hex.length === 3 || hex.length === 4)
      ? hex.match(/.{1}/g).map(str => str + str)
      : (hex.length === 6 || hex.length === 8)
      ? hex.match(/.{2}/g)
      : [ 0, 0, 0 ];
  // from object
  } else {
    hex = [ values.r, values.g, values.b ];
  }

  // check if shorthand -> make full, ex: "123" -> "112233"
  const [ red, green, blue ] = hex
    .map(value => value.length === 2 ? value : value + value);

  const rgb = [ red, green, blue ].map(value => parseInt(value, 16));

  if (asArray) return rgb;

  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2]
  };
}
