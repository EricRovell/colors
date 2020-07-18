/**
 * Converts RGB color string to HSV model values.
 * @param {Number[]|object} values - The RGB color model values array or object with channel as keys.
 * @param {object} [parameters] - Parameters object.
 * @param {boolean} [parameters.asArray=false] - Return result as array. 
 * @returns {Number[]} an array containing HSV model values.
 */
export default function rgb2hsv(values, { asArray = false } = {}) {

  let rgb;

  if (Array.isArray(values)) {
    if (values.length === 3) {
      rgb = values;
    } else if (values.length === 1) {
      rgb = new Array(3).fill(values[0]);
    } else {
      rgb = [ 0, 0, 0 ];
    }
  } else {
    rgb = [ values.r, values.g, values.b ];
  }

  const [ red, green, blue ] = rgb.map(value => value / 255);

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
