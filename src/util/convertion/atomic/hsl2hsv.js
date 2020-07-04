/**
 * Converts HSL color string to HSV model values.
 * @param {Number[]} hsl - The HSL color model values.
 * @param {Number} hsl[].hue - hue value in range [0, 360].
 * @param {Number} hsl[].saturation - saturation value in range [0, 100].
 * @param {Number} hsl[].lightness - lightness value in range [0, 100].
 * @returns {Number[]} an array containing HSV model values in range [[0, 360], [0, 100], [0, 100]]
 */
export default function hsl2hsv({ h, s, l, values = [], asArray = false }) {

  let [ hue, saturation, lightness ] = (Array.isArray(values) && values?.length)
    ? [ values[0], values[1] / 100, values[2] / 100 ]
    : [ h, s / 100, l / 100 ];

  // calculate value and saturation for HSV
  const value = lightness + saturation * Math.min(lightness, 1 - lightness);
  const sV = (value === 0)
    ? 0
    : 2 * (1 - lightness / value);

  // convertion result
  const hsv = [
    h,
    Math.round(sV * 100),
    Math.round(value * 100)
  ]

  if (asArray) return hsv;
  
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2]
  };
}
