/**
 * Converts RGB color string to CMYK model values.
 * @param {Number[]|object} values - The RGB color model values array or object with channel as keys.
 * @param {object} [parameters] - Parameters object.
 * @param {boolean} [parameters.asArray=false] - Return result as array. 
 * @returns {Number[]} an array containing CMYK model values.
 */
export default function rgb2cmyk(values, { asArray = false } = {}) {

  let rgb;

  if (Array.isArray(values)) {
    if (values.length === 3) {
      rgb = values;
    } else if (values.length === 1) {
      rgb = new Array(3).fill(values[0]);
    } else {
      rgb = [ 0, 0, 0 ];
    }
  } else {
    rgb = [ values.r, values.g, values.b ];
  }
  
  const [ red, green, blue ] = rgb.map(value => value / 255);

  const k = 1 - Math.max(red, green, blue);
  const [ c, m, y ] = [
    (1 - red - k),
    (1 - green - k),
    (1 - blue - k)
  ].map(value => value / (1 - k));

  const cmyk = [ c, m, y, k ]
    .map(value => Math.round(value * 100));

  if (asArray) return cmyk;

  return {
    c: cmyk[0],
    m: cmyk[1],
    y: cmyk[2],
    k: cmyk[3]
  };
}
