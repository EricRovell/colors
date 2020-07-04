/**
 * Converts HSV color string to HSL model values.
 * @param {Number[]} hsv - The HSV color model values array.
 * @param {Number} hsv[].hue - hue value in range [0, 360].
 * @param {Number} hsv[].saturation - saturation value in range [0, 1].
 * @param {Number} hsv[].value - value value in range [0, 1].
 * @returns {Number[]} an array containing HSL model values in range [hue:[0, 360], saturation: [0, 1], lightness: [0, 1]].
 */
export default function hsv2hsl({ h, s, v, values = [], asArray = false }) {

  const [ hue, saturationV, value ] = (Array.isArray(values) && values?.length)
    ? values
    : [ h, s / 100, v / 100 ];
  
  const lightness = value * (1 - saturationV / 2);
  const saturationL = (lightness === 0 || lightness === 1)
    ? 0
    : (value - lightness) / (Math.min(lightness, 1 - lightness));

  const hsl = [
    hue,
    Math.round(saturationL * 100),
    Math.round(lightness * 100)
  ]

  if (asArray) return hsl;

  return {
    h: hsl[0],
    s: hsl[1],
    l: hsl[2]
  };
}
