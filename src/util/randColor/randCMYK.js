import randFloat from "@util/math/randFloat.js";

/**
 * Generates a random CMYK value color.
 * @returns {Number[]} CMYK values array
 */
export default function randHSL() {
  return [ randFloat(2), randFloat(2), randFloat(2), randFloat(2) ];
}
