import commonParts from "./commonParts.js";
import compileRegExp from "./compileRegExp.js";

const {
  hex, hex2,
  percentage,
  range0to255,
  range0to360,
  opacity,
  separator
} = commonParts;

const models = new Map();

/**
 * Model: HEX, shorthand
 * Remarks: # is optional.
 * Examples: #1A3, 1A3
 * Groups: (r)(g)(b)(?a)
*/
models.set(
  compileRegExp({ parts: [ /^\#?/, hex("r"), hex("g"), hex("b"), hex("opacity"), "?", /$/ ] }),
  "hex"
);

/**
 * Model: HEX
 * Remarks: # is optional.
 * Examples: #1A3D45, 1A3D45
 * Groups: (rr)(gg)(bb)(?aa)
*/
models.set(
  compileRegExp({ parts: [ /^\#?/, hex2("r"), hex2("g"), hex2("b"), hex2("opacity"), "?", /$/ ] }),
  "hex"
);

/**
 * Model: RGB
 * Remarks: model indicator and parentheses are optional.
 * Examples:
 *   255 135 55
 *   255, 135, 55
 *   (255 135 55)
 *   rgb(255 135 55)
 *   rgb(255, 135, 55)
 *   255 135 55 28
 *   255, 135, 55 0.28
 *   (255 135 55 98)
 *   rgb(255 135 55 0.98)
 *   rgb(255, 135, 55)
 * Groups: (r)(g)(b)(?opacity)
*/
models.set(
  compileRegExp({ parts: [ /^(?:rgb|rgba?)?[\s\/]*\(?[\s\/]*/, range0to255("r"), separator, range0to255("g"), separator, range0to255("b"), opacity, /\)?$/ ] }),
  "rgb"
);

/**
 * Model: HSL
 * Remarks: model indicator, percentage symbol, and parentheses are optional.
 * Examples:
 *   360 25% 35%
 *   360deg 25% 35%
 *   360, 25, 35
 *   360deg, 25%, 35%
 *   hsl(360 25% 35%)
 *   hsl(360deg 25% 35%)
 *   hsl(360, 25%, 35%)
 *   hsl(360deg, 25%, 35%)
 * Groups: (h)(s)(l)(?opacity)
*/
models.set(
  compileRegExp({ parts: [ /^(?:hsl|hsla)?[\s\/]*\(?[\s\/]*/, range0to360("h"), /(?:deg)?/, separator, percentage("s"), separator, percentage("l"), opacity, /\)?$/ ] }),
  "hsl"
);

/**
 * Model: HSV / HSB
 * Remarks: model indicator, percentage symbol, and parentheses are optional.
 * Examples: same as HSL, only possible to distinguish by model identificator
 * Groups: (h)(s)(v)(?opacity)
*/
models.set(
  compileRegExp({ parts: [ /^(?:hsv|hsva|hsb|hsba)?[\s\/]*\(?[\s\/]*/, range0to360("h"), /(?:deg)?/, separator, percentage("s"), separator, percentage("v"), opacity, /\)?$/ ] }),
  "hsv"
);

/**
 * Model: CMYK
 * Remarks: model indicator, percentage symbol, and parentheses are optional.
 * Examples:
 *   cmyk 25 35 45 79
 *   cmyk 25% 35% 45% 79%
 *   25 35 45 79
 *   25% 35% 45% 79%
 *   25 35 45 79 25%
 *   25% 35% 45% 79% 0.39
 * Groups: (h)(s)(l)(?opacity)
*/
models.set(
  compileRegExp({ parts: [ /^(?:cmyk)?[\s\/]*\(?[\s\/]*/, percentage("c"), separator, percentage("m"), separator, percentage("y"), separator, percentage("k"), opacity, /\)?$/ ] }),
  "cmyk"
);


export default models;


// Description: RGB with percentage values; rgb function identificator and parenthesis are optional, percent symbol is required.
  // Examples:
  //   - 85% 32% 22%
  //   - 85%, 32%, 22%
  //   - (85% 32% 22%)
  //   - rgb(85% 32% 22%)
  //   - rgb(85%, 32%, 22%)
  // Groups: (R)(G)(B)
//models.set(
  //compileRegExp({ parts: [ /^(?:rgb|rgba?)?[\s\/]*\(?[\s\/]*/, percentage("r"), separator, percentage("g"), separator, percentage("b"), opacity, /\)?$/ ] }),
  //"rgb, %"
//);