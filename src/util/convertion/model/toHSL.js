import { rgb2hsl, hex2rgb, cmyk2rgb, hsv2hsl } from "../atomic/convert.js";

export default function toHSL({ rgb, hex, hsv, cmyk, hsl }) {
  // same color
  if (hsl) return hsl;
  // direct convert available
  if (rgb) return rgb2hsl(rgb);
  if (hsv) return hsv2hsl(hsv);

  // check values to get RGB
  const intermediateRGB = (hex)
    ? hex2rgb(hex)
    : (cmyk)
    ? cmyk2rgb(cmyk)
    // default value
    : [ 0, 0, 0 ];

  // get HSL value from intermidiate convertion to RGB
  return rgb2hsl(intermediateRGB)
}
