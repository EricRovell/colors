/**
 * Converts RGB color string to CMYK model values.
 * @param {Number[]} rgb - The RGB color model values array, values in range [0, 255]
 * @returns {Number[]} an array containing CMYK model values in range [0, 1].
 */
export default function rgb2cmyk(rgb) {
  const [ r, g, b ] = rgb.map(value => value / 255);
  const k = 1 - Math.max(r, g, b);
  const [ c, m, y ] = [
    (1 - r - k),
    (1 - g - k),
    (1 - b - k)
  ].map(value => value / (1 - k));

  return [ c, m, y, k ]
    .map(value => Number(value.toPrecision(2)));
}
