import toModel from "./model/convertionModel.js";
import validate from "./validate.js";

/**
 * Converts color from one model to another: RGB, HEX, HSL, HSV, CMYK.
 * @param {object} params - Parameters are provided as an object
 * @param {string} params.from - Converted color model
 * @param {string} params.to - Target color model
 * @param {string|Number[]} params.value - Converted color model value
 * @returns {string|Number[]|object} Resulting target model color value.
 * String is being return for HEX model, object is being returned in case "ALL" models.
 */
export default function convertColor({ from, to = null, value }) {

  // validate
  const validValues = validate({
    model: from,
    values: value
  });

  if (!to) {
    return toModel.all({ [from]: validValues });
  }

  return toModel[to]({ [from]: validValues });
}
