import regex from "./regex.js";

export default function determineColorString(str) {
  // check every expression until 1st valid one
  for (let expression of regex) {
    let match = str.match(expression.expression);
    if (match) {
      /* return {
        model: expression.model,
        value: match.slice(1)
      }; */
      switch(expression.model) {
        case "hex":
        case "rgb":
          return {
            model: expression.model,
            alpha: match[4],
            value: {
              red: match[1],
              green: match[2],
              blue: match[3],
            }
          };
        case "hsl":
          return {
            model: expression.model,
            alpha: match[4],
            value: {
              hue: match[1],
              saturation: match[2],
              lightness: match[3],  
            }
          };
        case "hsv":
          return {
            model: expression.model,
            alpha: match[4],
            value: {
              hue: match[1],
              saturation: match[2],
              value: match[3],
            }
          };
        case "cmyk":
          return {
            model: expression.model,
            alpha: match[5],
            value: {
              cyan: match[1],
              magenta: match[2],
              yellow: match[3],
              black: match[4],
            }
          };
      }
    }
  }

  // none expression suited -> null
  return null;
}
