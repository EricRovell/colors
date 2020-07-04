import commonParts from "./commonParts.js";
import compileRegExp from "./compileRegExp.js";

const {
  hex, hex2,
  range0to100,
  range0to255,
  range0to360,
  opacity 
} = commonParts;

export default [

  // HEX
  // Description: HEX shorthand notation; hash symbol is optional.
  // Examples: #123, 123
  // Groups: (R)(G)(B) 
  {
    model: "hex",
    type: "shorthand",
    expression: compileRegExp({
      parts: [ /^\#?/, hex("r"), hex("g"), hex("b"), hex("opacity"), "?", /$/ ],
      flags: "i"
    })
  },

  // Description: HEX notation; hash symbol is optional.
  // Examples: #123ABC, 123ABC
  // Groups: (RR)(GB)(BB)
  {
    model: "hex",
    expression: compileRegExp({
      parts: [ /^\#?/, hex2("r"), hex2("g"), hex2("b"), hex2("opacity"), "?", /$/ ],
      flags: "i"
    })
  },

  // RGB

  // Description: RGB; rgb function identificator and parenthesis are optional.
  // Examples:
  //   - 255 135 55
  //   - 255, 135, 55
  //   - (255 135 55)
  //   - rgb(255 135 55)
  //   - rgb(255, 135, 55)
  // Groups: (R)(G)(B)
  {
    model: "rgb",
    type: "absolute",
    expression: compileRegExp({
      parts: [ /^(?:rgb|rgba)?[\s+\/]*\(?[\s+\/]*/, range0to255("r"), /[\s+\/]+/, range0to255("g"), /[\s+\/]+/, range0to255("b"), /[\s+\/]*/, opacity, "?", /\)?$/ ],
      flags: "i"
    })
  },

  // Description: RGB with percentage values; rgb function identificator and parenthesis are optional, percent symbol is required.
  // Examples:
  //   - 85% 32% 22%
  //   - 85%, 32%, 22%
  //   - (85% 32% 22%)
  //   - rgb(85% 32% 22%)
  //   - rgb(85%, 32%, 22%)
  // Groups: (R)(G)(B)
  {
    model: "rgb",
    type: "percentage",
    expression: compileRegExp({
      parts: [ /^(?:rgb|rgba)?\W*\(?\W*/, range0to100("r"), /\%[\s+\/]+/, range0to100("g"), /\%[\s+\/]+/, range0to100("b"), /\%[\s+\/]*/, opacity, "?", /\)?$/ ],
      flags: "i"
    })
  },

  // HSL

  // Description: HSL; function identificator, parenthesis, and deg are optional.
  // Examples:
  //   - 360 25% 35%
  //   - 360deg 25% 35%
  //   - 360, 25%, 35%
  //   - 360deg, 25%, 35%
  //   - hsl(360 25% 35%)
  //   - hsl(360deg 25% 35%)
  //   - hsl(360, 25%, 35%)
  //   - hsl(360deg, 25%, 35%)
  // Groups: (H)(S)(L)
  {
    model: "hsl",
    expression: compileRegExp({
      parts: [ /^(?:hsl|hsla)?[\s+\/]*\(?[\s+\/]*/, range0to360("h"), /(?:deg)?/, /[\s+\/]+/, range0to100("s"), /%[\s+\/]/, range0to100("l"), /\%[\s+\/]*/, opacity, "?", /\)?$/ ],
      flags: "i"
    })
  },

  // Description: HSV; function identificator, parenthesis, and deg are optional.
  // Examples:
  // Groups: (H)(S)(V)
  {
    model: "hsv",
    expression: compileRegExp({
      parts: [ /^(?:hsv|hsva)?[\s+\/]*\(?[\s+\/]*/, range0to360("h"), /(?:deg)?/, /[\s+\/]+/, range0to100("s"), /%[\s+\/]+/, range0to100("v"), /\%[\s+\/]*/, opacity, "?", /\)?$/ ],
      flags: "i"
    })
  },

  // CMYK

  // Description: 
  // Examples:
  //   - 360 25% 35%
  // Groups: (C)(M)(Y)(K)
  {
    model: "cmyk",
    props: "percentage",
    expression: compileRegExp({
      parts: [ /^(?:cmyk)?\W*\(?\W*/, range0to100("c"), /\%\W+/, range0to100("m"), /\%\W+/, range0to100("y"), /\%\W+/, range0to100("k"), /\%\W*/, opacity, "?", /\)?$/ ],
      flags: "i"
    })
  },

];
