/**
 * Converts RGBA color string to HEX model value.
 * @param {Number[]|object} values - The RGB color model values array or object with channel as keys.
 * @param {object} [parameters] - Parameters object.
 * @param {boolean} [parameters.asArray=false] - Return result as array. 
 * @param {boolean} [parameters.asString=false] - Return result as string. 
 * @returns {string} HEX value string with Hash symbol and uppercase value symbols.
 */
export default function rgb2hex(values, { asArray = false, asString = false } = {}) {

  let rgb;

  // from array
  if (Array.isArray(values)) {
    if (values.length === 3) {
      rgb = values;
    } else if (values.length === 1) {
      rgb = new Array(3).fill(values[0]);
    } else {
      rgb = [ 0, 0, 0 ];
    }
  // from object
  } else {
    rgb = [ values.r, values.g, values.b ];
  }

  // -> to hex values
  const hex = rgb 
    .map(value => {
      const hexValue = value.toString(16);
      return (hexValue.length === 2) ? hexValue : hexValue + hexValue;
    });

  if (asString) {
    return `#${hex.join("").toUpperCase()}`;
  }

  if (asArray) {
    return hex;
  }

  return {
    r: hex[0],
    g: hex[1],
    b: hex[2]
  };
}
