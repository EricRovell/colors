import randInt from "@util/math/randInt.js";

/**
 * Generates a random HEX value color.
 * @param {object} [config] - The configuration
 * @param {Boolean} [config.percentage=false] - Request the percentage RGB values
 * @returns {Number[]} RGB values array
 */
export default function randRGB({ percentage = false } = {}) {
  const rgb = [ randInt(255), randInt(255), randInt(255) ]
  
  return (percentage)
    ? rgb.map(value => Math.round(value * 100 / 255))
    : rgb;
}
