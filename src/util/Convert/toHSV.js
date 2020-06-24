import { hex2rgb, cmyk2rgb, rgb2hsv, hsl2hsv } from "./Convertions.js";

export default function toHSV({ rgb, hex, hsv, cmyk, hsl } = { hsv: [ 0, 0, 0 ] }) {
  // same color
  if (hsv) return hsv;
  // direct convert available
  if (rgb) return rgb2hsv(rgb);
  if (hsl) return hsl2hsv(hsl);

  // check values to get RGB
  const intermediateRGB = (hex)
    ? hex2rgb(hex)
    : (cmyk)
    ? cmyk2rgb(cmyk)
    // default value
    : [ 0, 0, 0 ];

  // get HSL value from intermidiate convertion to RGB
  return rgb2hsv(intermediateRGB)
}
