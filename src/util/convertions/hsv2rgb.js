/**
 * Converts HSV color string to RGB model values.
 * @param {Number[]} hsl - The HSV color model values array.
 * @param {Number} hsl[].hue - hue value in range [0, 360].
 * @param {Number} hsl[].saturation - saturation value in range [0, 1].
 * @param {Number} hsl[].value - value in range [0, 1].
 * @returns {Number[]} an array containing RGB model values in range [0, 255].
 */
export default function hsv2rgb(hsv) {
  const [ hue, saturation, value ] = hsv;

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

  return rgb.map(value => Math.round(
    (value + m) * 255)
  );
}
