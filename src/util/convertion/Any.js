import toModel from "./model/convertionModel.js";

/**
 * Converts color from one model to another: RGB, HEX, HSL, HSV, CMYK.
 * @param {object} params - Parameters are provided as an object
 * @param {string} params.from - Converted color model
 * @param {string} params.to - Target color model
 * @param {string|Number[]} params.value - Converted color model value
 * @returns {string|Number[]|object} Resulting target model color value.
 * String is being return for HEX model, object is being returned in case "ALL" models.
 */
export default function convertColor({ from, to = "all", values }) {
  return toModel[to]({ [from]: values });
}
