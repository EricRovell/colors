import { hex2rgb, rgb2cmyk, hsl2rgb, hsv2rgb } from "./Convertions.js";

export default function toCMYK({ rgb, hex, hsv, cmyk, hsl } = { cmyk: [ 0, 0, 0, 0 ] }) {
  // same color
  if (cmyk) return cmyk;
  // direct convert available
  if (rgb) return rgb2cmyk(rgb);

  // check values to get RGB
  const intermediateRGB = (hex)
    ? hex2rgb(hex)
    : (hsl)
    ? hsl2rgb(hsl)
    : (hsv)
    ? hsv2rgb(hsv)
    // default value
    : [ 0, 0, 0 ];

  // get HSL value from intermidiate convertion to RGB
  return rgb2cmyk(intermediateRGB)
}
