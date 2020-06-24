/**
 * Converts RGB color string to HSV model values.
 * @param {Number[]} rgb - The RGB color model values array in range [0, 255].
 * @param {Number} hsl[].hue - hue value in range [0, 360].
 * @param {Number} hsv[].saturation - saturation value in range [0, 1].
 * @param {Number} hsv[].value - value in range [0, 1].
 * @returns {Number[]} an array containing RGB model values in range [0, 255].
 */
export default function rgb2hsv(rgb) {
  const [ r, g, b ] = rgb.map(value => value / 255);
  const [ min, max ] = [ Math.min(r, g, b), Math.max(r, g, b) ];
  const chroma = max - min;

  const hue = (() => {
    if (chroma === 0) return 0;
    switch(max) {
      case (r): return 60 * (((g - b) / chroma) + (g < b ? 6 : 0));
      case (g): return 60 * ((b - r) / chroma + 2);
      case (b): return 60 * ((r - g) / chroma + 4);
    }
  })();

  const saturation = (max === 0)
    ? 0
    : chroma / max;
    
  const value = max;

  return [
    Math.round(hue),
    Number(saturation.toPrecision(2)),
    Number(value.toPrecision(2))
  ];
}
