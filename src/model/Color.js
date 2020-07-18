import convert from "@util/convertion/Any.js";

import ColorRGB from "./ColorRGB.js";
import ColorHex from "./ColorHex.js";
import ColorHSL from "./ColorHSL.js";
import ColorHSV from "./ColorHSV.js";
import ColorCMYK from "./ColorCMYK.js";

/** Class representing a Color */
export default class Color {
  /**
   * Create a color instance.
   * @param {object} param - The parameters object.
   * @param {("rgb"|"hex"|"hsl"|"hsv"|"cmyk")} param.model - The specified model to constructo color from.
   * @param {object} param.value - The color model values object.
   */
  constructor({ model, value } = { model: "rgb", value: { r: 0, g: 0, b: 0 } }) {
    // get all color models
    const data = Color.toAll({ model, value });

    // primary model to work with
    this.primary = model;
    // all models
    this.model = {
      rgb: new ColorRGB(data.rgb),
      hex: new ColorHex(data.hex),
      hsl: new ColorHSL(data.hsl),
      hsv: new ColorHSV(data.hsv),
      cmyk: new ColorCMYK(data.cmyk)
    };
    //
    this.opacity = (data && data.value) ?? 1;
  }

  get rgb() {
    return this.model.rgb;
  }

  get hex() {
    return this.model.hex;
  }

  get hsl() {
    return this.model.hsl;
  }

  get hsv() {
    return this.model.hsv;
  }

  get cmyk() {
    return this.model.cmyk;
  }

  get data() {
    return this.model[this.primary].data;
  }

  static toAll({ model, type, value }) {
    return convert({
      from: model,
      value
    });
  }

  /**
   * Mutates the color value.
   * @param {object} param - Color parameters object.
   * @param {("rgb"|"hex"|"hsl"|"hsv"|"cmyk")} param.model - Color's model.
   * @param {string} [param.type] - Color model's specific properties.
   * @param {object} param.value - Color model's properties object.
   */
  set value({ model = null, value } = {}) {
    // no parameters provided -> do nothing
    if (!model) return;

    // change primary model
    this.primary = model;

    // set opacity if present
    this.opacity = value.opacity ?? 1;

    // validate values and convert
    const colors = convert({
      from: model,
      value: this.model[model].validate(value)
    });

    // update props in all models
    for (let model in colors) {
      this.model[model].setValue(colors[model]);
    }

    return true;
  }

  /**
   * Sets/rotates the prime model.
   * It simplifies working with color properties and getting data.
   * @param {("rgb"|"hex"|"hsl"|"hsv"|"cmyk"|"NEXT")} [model] - desired model
   */
  set key(model) {
    // if parameter passed and the value is legit -> set
    if (model !== "NEXT" && this.model.hasOwnProperty(model)) {
      this.model = model;
    } else {
      // no value provided -> rotate key
      switch(this.primary) {
        case "rgb": this.primary = "hex"; break;
        case "hex": this.primary = "hsl"; break;
        case "hsl": this.primary = "hsv"; break;
        case "hsv": this.primary = "cmyk"; break;
        case "cmyk": this.primary = "rgb"; break;
      }
    }
    return this;
  }

  /**
   * Get the prime model in use.
   * It simplifies working with color properties and getting data.
   */
  get key() {
    return this.primary;
  }

  /**
   * Get properties for current primary model.
   */
  get properties() {
    return this.model[this.primary].properties;
  }

  get percentage() {
    return this.model[key].percentage;
  }

  get asArray() {
    return this.model[this.primary].asArray;
  }

  get modelsString() {
    const data = {};
    for (let model in this.model) {
      data[model] = this.model[model].toString;
    }

    return data;
  }

  /**
   * Getting the css compatible rgb color string.
   * @return {string} The css property string.
   */
  get cssColorProperty() {
    return this.model.rgb.cssString;
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

  get randomColorString() {
    const models = Object.keys(this.model)
    const model = models[ Math.floor(
      Math.random() * models.length
    )];

    return (model === "hex")
      ? `#${this[model].randomArray.join("")}`
      : `${model} ${this[model].randomArray.join(" ")}`;
  }

  get isGrayscale() {
    return (this.hsl.s === 0);
  }

  get isDark() {
    return (this.hsl.l < 0.5);
  }

  generateShades(shades) {
    return this.hsl.generateShades(shades);
  }

  generateTints(tints) {
    return this.hsl.generateTints(tints);
  }

  static get availablePalettes() {
    return [
      "monochromatic",
      "complementary",
      "analogous",      
      "splitComplementary",
      "triadic",
      "tetradic",
      "square",
    ];
  }

  getPalette(palette) {
    return this.hsl[palette];
  }
  
}
