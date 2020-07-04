/**
 * Converts RGB color string to CMYK model values.
 * @param {Number[]} rgb - The RGB color model values array, values in range [0, 255]
 * @returns {Number[]} an array containing CMYK model values in range [0, 1].
 */
export default function rgb2cmyk({ r, g, b, values = [], asArray = false }) {
  const [ red, green, blue ] = (Array.isArray(values) && values?.length)
    ? values.map(value => value / 255)
    : [ r / 255, g / 255, b / 255 ];

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
