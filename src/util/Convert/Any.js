import toCMYK from "./toCMYK.js";
import toHEX from "./toHEX.js";
import toHSL from "./toHSL.js";
import toHSV from "./toHSV.js";
import toRGB from "./toRGB.js";
import toAll from "./toAll.js";

/**
 * Converts color from one model to another: RGB, HEX, HSL, HSV, CMYK.
 * @param {object} params - Parameters are provided as an object
 * @param {string} params.from - Converted color model
 * @param {string} params.to - Target color model
 * @param {string|Number[]} params.value - Converted color model value
 * @returns {string|Number[]|object} Resulting target model color value.
 * String is being return for HEX model, object is being returned in case "ALL" models.
 */
export default function toModel({ from, to, value }) {
  switch(to.toLowerCase()) {
    case "rgb":
      return toRGB({ [from]: value });
    case "hex":
      return toHEX({ [from]: value });
    case "hsl":
      return toHSL({ [from]: value });
    case "HSV":
      return toHSV({ [from]: value });
    case "cmyk":
      return toCMYK({ [from]: value });
    case "all":
      return toAll({ [from]: value });
    default:
      return null;
  }
}
