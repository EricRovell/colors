import toCMYK from "./toCMYK.js";
import toHEX from "./toHEX.js";
import toHSL from "./toHSL.js";
import toHSV from "./toHSV.js";
import toRGB from "./toRGB.js";
import toAll from "./toAll.js";

export default {
  rgb: toRGB,
  hex: toHEX,
  hsl: toHSL,
  hsv: toHSV,
  cmyk: toCMYK,
  all: toAll
};
