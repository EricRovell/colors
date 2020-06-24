/*
  Getting all color convertion functions from util folder in one place
*/

// -> RGB
export { default as hex2rgb } from "../util/convertions/hex2rgb.js";
export { default as hsl2rgb } from "../util/convertions/hsl2rgb.js";
export { default as hsv2rgb } from "../util/convertions/hsv2rgb.js";
export { default as cmyk2rgb } from "../util/convertions/cmyk2rgb.js";
// -> hex
export { default as rgb2hex } from "../util/convertions/rgb2hex.js";
// -> hsl/hsv
export { default as hsv2hsl } from "../util/convertions/hsv2hsl.js";
export { default as hsl2hsv } from "../util/convertions/hsl2hsv.js";
export { default as rgb2hsv } from "../util/convertions/rgb2hsv.js";
export { default as rgb2hsl } from "../util/convertions/rgb2hsl.js";
// -> CMYK
export { default as rgb2cmyk } from "../util/convertions/rgb2cmyk.js";
