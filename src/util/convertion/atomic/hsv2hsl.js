/**
 * Converts HSV/HSB color to HSL model values.
 * @param {Number[]|object} values - The HSV color model values array or object with channel as keys.
 * @param {object} [parameters] - Parameters object.
 * @param {boolean} [parameters.asArray=false] - Return result as array. 
 * @returns {object|Number[]} an array containing HSL model values.
 */
export default function hsv2hsl(values, { asArray = false } = {}) {

  let hsv;

  if (Array.isArray(values)) {
    hsv = (values.length === 3)
      ? values
      : [ 0, 0, 0 ];
  } else {
    hsv = [ values.h, values.s, values.v ];
  }

  const [ hue, saturationV, value ] = [ hsv[0], hsv[1] / 100, hsv[2] / 100 ];
  
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
