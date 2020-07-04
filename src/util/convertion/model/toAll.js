import { hex2rgb, hsl2rgb, hsv2rgb, cmyk2rgb, rgb2hsl, rgb2hsv, rgb2cmyk, rgb2hex } from "../atomic/convert.js";

export default function toAll({ rgb, hex, hsl, hsv, cmyk }) {
  // the situation is, any model is easy to convert to RGB in one step
  // this way we ALWAYS get RGB color first and after that generate everything else

  // get rgb
  if (!rgb) {
    rgb =
      (hex) ? hex2rgb(hex) :
      (hsl) ? hsl2rgb(hsl) :
      (hsv) ? hsv2rgb(hsv) :
      (cmyk) ? cmyk2rgb(cmyk) : { r: 0, g: 0, b: 0 }; // <- default rgb
  }

  // RGB can be converted to all colors in one step
  return {
    rgb,
    hex: hex ?? rgb2hex(rgb),
    hsl: hsl ?? rgb2hsl(rgb),
    hsv: hsv ?? rgb2hsv(rgb),
    cmyk: cmyk ?? rgb2cmyk(rgb)
  };
}
