/**
 * Converts HSL color to HSV/HSB model values.
 * @param {Number[]|object} values - The HSL color model values array or object with channel as keys.
 * @param {object} [parameters] - Parameters object.
 * @param {boolean} [parameters.asArray=false] - Return result as array. 
 * @returns {object|Number[]} an array containing HSV/HSB model values.
 */
export default function hsl2hsv(values, { asArray = false } = {}) {

  let hsl;

  if (Array.isArray(values)) {
    hsl = (values.length === 3)
      ? values
      : [ 0, 0, 0 ];
  } else {
    hsl = [ values.h, values.s, values.l ];
  }

  const [ hue, saturation, lightness ] = [ hsl[0], hsl[1] / 100, hsl[2] / 100 ];

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
