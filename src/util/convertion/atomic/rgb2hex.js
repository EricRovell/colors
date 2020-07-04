/**
 * Converts RGBA color string to HEX model value.
 * @param {Number[]} rgba - The RGB color model values array, values in range [0, 255]
 * @returns {string} HEX value string with Hash symbol and uppercase value symbols.
 */
export default function rgb2hex({ r, g, b, values = [], asArray = false, asString = false }) {

  // get values from array or predefined RGB values and map them to hex string
  const hex = ((Array.isArray(values) && values?.length)
    ? values
    : [ r, g, b ])
      .map(value => value.toString(16))

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
