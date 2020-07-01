import commonParts from "./commonParts.js";
import compileRegExp from "../compileRegExp.js";

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
      parts: [ /^\#?/, hex, hex, hex, hex, "?", /$/ ],
      flags: "i"
    })
  },

  // Description: HEX notation; hash symbol is optional.
  // Examples: #123ABC, 123ABC
  // Groups: (RR)(GB)(BB)
  {
    model: "hex",
    expression: compileRegExp({
      parts: [ /^\#?/, hex2, hex2, hex2, hex2, "?", /$/ ],
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
      parts: [ /^(?:rgb)?[\s+\/]*\(?[\s+\/]*/, range0to255, /[\s+\/]+/, range0to255, /[\s+\/]+/, range0to255, /[\s+\/]*/, opacity, "?", /\)?$/ ],
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
      parts: [ /^(?:rgb)?\W*\(?\W*/, range0to100, /\%[\s+\/]+/, range0to100, /\%[\s+\/]+/, range0to100, /\%[\s+\/]*/, opacity, "?", /\)?$/ ],
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
      parts: [ /^(?:hsl)?[\s+\/]*\(?[\s+\/]*/, range0to360, /(?:deg)?/, /[\s+\/]+/, range0to100, /%[\s+\/]/, range0to100, /\%[\s+\/]*/, opacity, "?", /\)?$/ ],
      flags: "i"
    })
  },

  // Description: HSV; function identificator, parenthesis, and deg are optional.
  // Examples:
  // Groups: (H)(S)(V)
  {
    model: "hsv",
    expression: compileRegExp({
      parts: [ /^(?:hsv)?[\s+\/]*\(?[\s+\/]*/, range0to360, /(?:deg)?/, /[\s+\/]+/, range0to100, /%[\s+\/]+/, range0to100, /\%[\s+\/]*/, opacity, "?", /\)?$/ ],
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
      parts: [ /^(?:cmyk)?\W*\(?\W*/, range0to100, /\%\W+/, range0to100, /\%\W+/, range0to100, /\%\W+/, range0to100, /\%\W*/, opacity, "?", /\)?$/ ],
      flags: "i"
    })
  },

];
