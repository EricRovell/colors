/**
 * Converts HSV/HSB color to RGB model values.
 * @param {Number[]|object} values - The HSV color model values array or object with channel as keys.
 * @param {object} [parameters] - Parameters object.
 * @param {boolean} [parameters.asArray=false] - Return result as array. 
 * @returns {object|Number[]} an array containing RGB model values.
 */
export default function hsv2rgb(values, { asArray = false } = {}) {

  let hsv;

  if (Array.isArray(values)) {
    hsv = (values.length === 3)
      ? values
      : [ 0, 0, 0 ];
  } else {
    hsv = [ values.h, values.s, values.v ];
  }

  const [ hue, saturation, value ] = [ hsv[0], hsv[1] / 100, hsv[2] / 100 ];

  const chroma = value * saturation;
  // will be used as the middle (second-largest) component value
  const middle = chroma * (1 - Math.abs(
    (hue / 60) % 2 - 1)
  );
  // to adjust each of the values for lightness
  const m = value - chroma;  

  let rgb;

  switch(true) {
    case hue >= 0 && hue < 60:
      rgb = [ chroma, middle, 0 ]; break;
    case hue >= 60 && hue < 120:
      rgb = [ middle, chroma, 0 ]; break;
    case hue >= 120 && hue < 180:
      rgb = [ 0, chroma, middle ]; break;
    case hue >= 180 && hue < 240:
      rgb = [ 0, middle, chroma ]; break;
    case hue >= 240 && hue < 300:
      rgb = [ middle, 0, chroma ]; break;
    case hue >= 300 && hue < 360:
      rgb = [ chroma, 0, middle ]; break;
  }

  if (asArray) {
    return rgb.map(value => Math.round(
      (value + m) * 255)
    );
  }

  return {
    r: Math.round(255 * (rgb[0] + m)),
    g: Math.round(255 * (rgb[1] + m)),
    b: Math.round(255 * (rgb[2] + m))
  };
}
