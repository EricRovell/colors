import convert from "@util/convertion/Any.js";

import ColorRGB from "./ColorRGB.js";
import ColorHex from "./ColorHex.js";
import ColorHSL from "./ColorHSL.js";
import ColorHSV from "./ColorHSV.js";
import ColorCMYK from "./ColorCMYK.js";

export default class Color {
  constructor({ rgb, hex, hsl, hsv, cmyk, opacity = 1 } = {}) {
    this.model = {
      rgb: new ColorRGB({ rgb }),
      hex: new ColorHex({ hex }),
      hsl: new ColorHSL({ hsl }),
      hsv: new ColorHSV({ hsv }),
      cmyk: new ColorCMYK({ cmyk })
    };
    this.opacity = opacity;
  }

  set value({ model, type, values }) {
    console.log(model, values);
    // set opacity if present
    this.opacity = values?.opacity ?? 1;

    // validate values and convert
    const colors = convert({
      from: model,
      value: this.model[model].validate(values)
    });

    // update props in all models
    for (let model in colors) {
      this.model[model].setValue(colors[model]);
    }

    return true;
  }

  get modelsString() {
    const data = {};
    for (let model in this.model) {
      data[model] = this.model[model].toString;
    }

    return data;
  }
  
}
