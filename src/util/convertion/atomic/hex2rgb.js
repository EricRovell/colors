/**
 * Converts HEX/HEXA color string to RGB/RGBA model values.
 * @param {string|string[]|number[]|object} hex - The HEX/HEXA color model values. Hash symbol is optional.
 * @returns {Number[]} an array containing RGB model values in range [0, 255]
 */
export default function hex2rgb({ r, g, b, values = [], string = "", asArray = false }) {

  let red, green, blue;

  // get values from array if provided
  // or from named props
  // check if shorthand -> make full, ex: "123" -> "112233"
  if (Array.isArray(values) && values?.length) {
    [ red, green, blue ] = values
      .map(value => value.length === 2 ? value : value + value);
  }

  // from string -> break into array object
  else if (string) {
    const hex = string.replace("#", "");
    // split hex string into channels
    [ red, green, blue ] = (hex.length === 3 || hex.length === 4)
      ? hex.match(/.{1}/g).map(str => str + str)
      : (hex.length === 6 || hex.length === 8)
      ? hex.match(/.{2}/g)
      : [ 0, 0, 0 ];
  }

  else {
    [ red, green, blue ] = [ r, g, b ]
      .map(value => (value.length === 1) ? value + value : value);
  }

  const rgb = [ red, green, blue ].map(value => parseInt(value, 16));

  if (asArray) return rgb;

  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2]
  };
}
