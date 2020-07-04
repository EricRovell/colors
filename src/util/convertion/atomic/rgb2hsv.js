/**
 * Converts RGB color string to HSV model values.
 * @param {Number[]} rgb - The RGB color model values array in range [0, 255].
 * @param {Number} hsl[].hue - hue value in range [0, 359].
 * @param {Number} hsv[].saturation - saturation value in range [0, 100].
 * @param {Number} hsv[].value - value in range [0, 100].
 * @returns {Number[]} an array containing RGB model values in range [0, 255].
 */
export default function rgb2hsv({ r, g, b, values = [], asArray = false }) {

  const [ red, green, blue ] = (Array.isArray(values) && values?.length)
    ? values.map(value => value / 255)
    : [ r / 255, g / 255, b / 255 ];

  const [ min, max ] = [ Math.min(red, green, blue), Math.max(red, green, blue) ];
  const chroma = max - min;

  const hue = (() => {
    if (chroma === 0) return 0;
    switch(max) {
      case (red): return 60 * (((green - blue) / chroma) + (green < blue ? 6 : 0));
      case (green): return 60 * ((blue - red) / chroma + 2);
      case (blue): return 60 * ((red - green) / chroma + 4);
    }
  })();

  const saturation = (max === 0)
    ? 0
    : chroma / max;
    
  const value = max;

  const hsv = [
    Math.round(hue),
    Math.round(saturation * 100),
    Math.round(value * 100)
  ];

  if (asArray) return hsv;

  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2]
  };
}
