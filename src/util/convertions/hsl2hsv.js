/**
 * Converts HSL color string to HSV model values.
 * @param {Number[]} hsl - The HSL color model values.
 * @param {Number} hsl[].hue - hue value in range [0, 360].
 * @param {Number} hsl[].saturation - saturation value in range [0, 1].
 * @param {Number} hsl[].lightness - lightness value in range [0, 1].
 * @returns {Number[]} an array containing HSV model values in range [[0, 360], [0, 1], [0, 1]]
 */
export default function hsl2hsv(hsl) {
  const [ hue, saturationL, lightness ] = hsl;

  const value = lightness + saturationL * Math.min(lightness, 1 - lightness);
  const saturationV = (value === 0)
    ? 0
    : 2 * (1 - lightness / value);
  
  return [
    hue,
    Number(saturationV.toPrecision(2)),
    Number(value.toPrecision(2))
  ];
}
