import convert from "@util/convertion/Any.js";
import parseColorString from "@util/parse/parseColorString.js";

import ColorRGB from "./ColorRGB.js";
import ColorHex from "./ColorHex.js";
import ColorHSL from "./ColorHSL.js";
import ColorHSV from "./ColorHSV.js";
import ColorCMYK from "./ColorCMYK.js";

export default class Color {
  constructor({ rgb, hex, hsl, hsv, cmyk, opacity = 1 } = {}) {
    this.model = {
      rgb: new ColorRGB(),
      hex: new ColorHex(),
      hsl: new ColorHSL(),
      hsv: new ColorHSV(),
      cmyk: new ColorCMYK()
    };
    this.opacity = opacity;

    // prop to check if the last mutation was valid
    this.valid = false;
  }

  colorFromString(string) {
    // try to parse the string
    const parseResult = parseColorString(string);
    // no match -> no mutation, remember the failure in `valid` prop
    if (!parseResult) {
      this.valid = false;
      return null;
    };

    // matched string, we know the model, it's type and object w/ values
    const { model, type, values } = parseResult;

    // set opacity if present
    this.opacity = values?.opacity ?? 1;

    // convert to other models
    const colors = convert({
      from: model,
      value: values
    });

    // update props in all models
    for (let model in colors) {
      this.model[model].setValue(colors[model]);
    }

    // successful update
    this.valid = true;
    return true;
  } 
  
}
