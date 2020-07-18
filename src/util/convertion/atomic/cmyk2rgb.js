/**
 * Converts CMYK color to RGB model values.
 * @param {Number[]|object} values - The CMYK color model values array or object with channel as keys.
 * @param {object} [parameters] - Parameters object.
 * @param {boolean} [parameters.asArray=false] - Return result as array. 
 * @returns {object|Number[]} an array containing HSV/HSB model values.
 */
export default function cmyk2rgb(values, { asArray = false } = {}) {

  let cmyk;

  if (Array.isArray(values)) {
    cmyk = (values.length === 4)
      ? values
      : [ 0, 0, 0, 0 ];
  } else {
    cmyk = [ values.c, values.m, values.y, values.k ];
  }

  const [ cyan, magenta, yellow, key ] = cmyk.map(value => value / 100);

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
