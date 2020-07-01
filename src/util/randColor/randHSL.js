import randInt from "@util/math/randInt.js";
import randFloat from "@util/math/randFloat.js";

/**
 * Generates a random HSL/HSV value color.
 * @returns {Number[]} HSL/HSV values array
 */
export default function randHSL() {
  return [ randInt(359), randFloat(2), randFloat(2) ];
}
