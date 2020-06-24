/**
 * Converts RGB color string to HSL model values.
 * @param {Number[]} rgb - The RGB color model values array in range [0, 255].
 * @returns {Number[]} an array containing HSL model values in range [hue[0, 360], saturation[0, 1], lightness[0, 1]].
 */
export default function rgb2hsl(rgb) {
  const [ r, g, b ] = rgb.map(value => value / 255);
  const [ min, max ] = [ Math.min(r, g, b), Math.max(r, g, b) ];
  const chroma = max - min;

  const lightness = (max + min) / 2;

  const saturation = (max === min)
    ? 0
    : chroma / (1 - Math.abs(2 * lightness - 1));

  const hue = () => {
    if (chroma === 0) return 0;
    switch(max) {
      case (r): return 60 * (((g - b) / chroma) + (g < b ? 6 : 0));
      case (g): return 60 * ((b - r) / chroma + 2);
      case (b): return 60 * ((r - g) / chroma + 4);
    }
  };

  return [
    Number(hue().toFixed(1)),
    Number(saturation.toFixed(2)),
    Number(lightness.toFixed(2))
  ]
}