/**
 * Converts RGB color string to HSL model values.
 * @param {Number[]} rgb - The RGB color model values array in range [0, 255].
 * @returns {Number[]} an array containing HSL model values in range [hue[0, 360], saturation[0, 100], lightness[0, 100]].
 */
export default function rgb2hsl({ r, g, b, values = [], asArray = false }) {

  const [ red, green, blue ] = (Array.isArray(values) && values?.length)
    ? values.map(value => value / 255)
    : [ r / 255, g / 255, b / 255 ];

  const [ min, max ] = [ Math.min(red, green, blue), Math.max(red, green, blue) ];
  const chroma = max - min;

  const lightness = (max + min) / 2;

  const saturation = (max === min)
    ? 0
    : chroma / (1 - Math.abs(2 * lightness - 1));

  const hue = () => {
    if (chroma === 0) return 0;
    switch(max) {
      case (red): return 60 * (((green - blue) / chroma) + (green < blue ? 6 : 0));
      case (green): return 60 * ((blue - red) / chroma + 2);
      case (blue): return 60 * ((red - green) / chroma + 4);
    }
  };

  const hsl = [
    Math.round(hue()),
    Math.round(saturation * 100),
    Math.round(lightness * 100)
  ]

  if (asArray) return hsl;

  return {
    h: hsl[0],
    s: hsl[1],
    l: hsl[2]
  };
}