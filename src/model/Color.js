import convert from "@util/convertion/Any.js";

import ColorRGB from "./ColorRGB.js";
import ColorHex from "./ColorHex.js";
import ColorHSL from "./ColorHSL.js";
import ColorHSV from "./ColorHSV.js";
import ColorCMYK from "./ColorCMYK.js";

export default class Color {
  constructor({ model, value } = {}) {
    // get all color models
    const data = Color.toAll({ model, value });

    this.model = {
      rgb: new ColorRGB(data.rgb),
      hex: new ColorHex(data.hex),
      hsl: new ColorHSL(data.hsl),
      hsv: new ColorHSV(data.hsv),
      cmyk: new ColorCMYK(data.cmyk)
    };
    this.opacity = data?.value ?? 1;
  }

  static toAll({ model, type, value }) {
    console.log(model);
    return convert({
      from: model,
      value
    });
  }

  set value({ model, type, values }) {
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

  get contrast() {
    const rgb = this.model.rgb.asArray.map(value => {
      const normalized = value / 255;
      if (normalized <= 0.03928) {
        return normalized / 12.92;
      } else {
        return ((normalized + 0.055) / 1.055) ** 2.4;
      }
    });
  
    const lightness = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  
    return (lightness > 0.179)
      ? "#000"
      : "#FFF";
  }
  
}
