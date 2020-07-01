import randInt from "@util/math/randInt.js";

/**
 * Generates a random HEX value color.
 * @param {object} [config] - The configuration
 * @param {Boolean} [config.shorthand=false] - Request the shorthand HEX color value, ex. #1FD
 * @param {Boolean} [config.hash=true] - Inclusion the hash symbol in HEX color value
 * @returns {String} HEX color string
 */
export default function randHEX({ shorthand = false, hash = true } = {}) {
  const maxValue = shorthand ? 15 : 255;

  const hex = [ randInt(maxValue), randInt(maxValue), randInt(maxValue) ]
    .map(value => {
      const val = value.toString(16);
      return (!shorthand && val.length === 1)
        ? 0 + val
        : val;
    })
    .join("");

  return (hash)
    ? "#" + hex
    : hex;
}
