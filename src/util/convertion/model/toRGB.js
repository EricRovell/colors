import { hex2rgb, hsl2rgb, hsv2rgb, cmyk2rgb } from "../atomic/convert.js";

export default function toRGB({ hex, hsl, hsv, cmyk }) {
  if (hex) return hex2rgb(hex);
  if (hsl) return hsl2rgb(hsl);
  if (hsv) return hsv2rgb(hsv);
  if (cmyk) return cmyk2rgb(cmyk);
}
