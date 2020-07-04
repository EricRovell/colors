import { hex2rgb, hsl2rgb, hsv2rgb, cmyk2rgb, rgb2hex } from "../atomic/convert.js";

export default function toHEX({ rgb, hex, hsl, hsv, cmyk }) {
  // direct convert available
  if (hex) return hex2rgb(hex);

  // check values to get RGB
  const intermediateRGB = (hsl)
    ? hsl2rgb(hsl)
    : (hsv)
    ? hsv2rgb(hsv)
    : (cmyk)
    ? cmyk2rgb(cmyk)
    // default value
    : rgb

  // get HEX value from intermidiate convertion to RGB
  return rgb2hex(intermediateRGB)
}
