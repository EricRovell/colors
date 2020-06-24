/**
 * Converts CMYK color to RGB model
 * @param {Number[]} cmyk - The CMYK model values, each in range [0, 1]
 * @param {Number} cmyk[].cyan - value in range [0, 1].
 * @param {Number} cmyk[].magenta - value in range [0, 1].
 * @param {Number} cmyk[].yellow - value in range [0, 1].
 * @param {Number} cmyk[].black - value in range [0, 1].
 * @returns {Number[]} an array containing RGB model values in range [0, 255]
 */
export default function cmyk2rgb(cmyk) {
  const [ c, m, y, k ] = cmyk;
  return [ 1 - c, 1 - m, 1 - y ]
    .map(value => Math.round(255 * value * (1 - k)));
}
