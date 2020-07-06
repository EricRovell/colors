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

  const [ cyan, magenta, yellow, key ] = (Array.isArray(values) && values?.length)
    ? values.map(value => value / 100)
    : [ c / 100, m / 100, y / 100, k / 100 ];

  // return results as an array if needed
  if (asArray) {
    return [ 1 - cyan, 1 - magenta, 1 - yellow ]
      .map(value => Math.round(255 * value * (1 - key)))
  }

  return {
    r: Math.round(255 * (1 - cyan) * (1 - key)),
    g: Math.round(255 * (1 - magenta) * (1 - key)),
    b: Math.round(255 * (1 - yellow) * (1 - key)),
  };
}
