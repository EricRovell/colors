import { hex2rgb, hsl2rgb, hsv2rgb, cmyk2rgb } from "./Convertions.js";
import {} from "./Convertions.js";
import { rgb2hex } from "./Convertions.js";
import rgb2hsl from "../util/convertions/rgb2hsl.js";
import rgb2hsv from "../util/convertions/rgb2hsv.js";
import rgb2cmyk from "../util/convertions/rgb2cmyk.js";

export default function toAll({ rgb, hex, hsl, hsv, cmyk } = { hex: "#000" }) {
  // the situation is, any model is easy to convert to RGB in one step
  // this way we ALWAYS get RGB color first and after that generate everything else

  // get rgb
  if (!rgb) {
    rgb =
      (hex) ? hex2rgb(hex) :
      (hsl) ? hsl2rgb(hsl) :
      (hsv) ? hsv2rgb(hsv) :
      (cmyk) ? cmyk2rgb(cmyk) : [ 0, 0, 0 ]; // <- default rgb
  }

  // RGB can be converted to all colors in one step
  return {
    rgb,
    hex: rgb2hex(rgb),
    hsl: rgb2hsl(rgb),
    hsv: rgb2hsv(rgb),
    cmyk: rgb2cmyk(rgb)
  };  
}
