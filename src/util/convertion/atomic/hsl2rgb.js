/**
 * Converts HSL color string to RGB model values.
 * @param {Number[]} hsl - The HSL color model values array.
 * @param {Number} hsl[].hue - hue value in range [0, 360].
 * @param {Number} hsl[].saturation - saturation value in range [0, 100].
 * @param {Number} hsl[].lightness - lightness value in range [0, 100].
 * @returns {Number[]} an array containing RGB model values in range [0, 255].
 */
export default function hsl2rgb({ h, s, l, values = [], asArray = false }) {

  // get params from array or predefined HSL values
  const [ hue, saturation, lightness ] = (Array.isArray(values) && values?.length)
    ? values
    : [ h, s / 100, l / 100 ];

  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  // to adjust each of the values for lightness
  const m = lightness - chroma / 2;
  // will be used as the middle (second-largest) component value
  const middle = chroma * (1 - Math.abs(
    (hue / 60) % 2 - 1)
  );

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
