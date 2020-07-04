/**
 * Converts CMYK color to RGB model
 * @param {Number[]} cmyk - The CMYK model values, each in range [0, 100]
 * @param {Number} cmyk[].cyan - value in range [0, 100].
 * @param {Number} cmyk[].magenta - value in range [0, 100].
 * @param {Number} cmyk[].yellow - value in range [0, 100].
 * @param {Number} cmyk[].black - value in range [0, 100].
 * @returns {Number[]} an array containing RGB model values in range [0, 255]
 */
export default function cmyk2rgb({ c, m, y, k, values = [], asArray = false }) {

  if (values.length) {
    [ c, m, y, k ] = values.map(value => value / 100);
  }

  // return results as an array if needed
  if (asArray) {
    return [ 1 - c, 1 - m, 1 - y ]
      .map(value => Math.round(255 * value * (1 - k)))
  }

  return {
    r: Math.round(255 * (1 - c) * (1 - k)),
    g: Math.round(255 * (1 - m) * (1 - k)),
    b: Math.round(255 * (1 - y) * (1 - k)),
  };
}
