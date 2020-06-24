/**
 * Converts RGBA color string to HEX model value.
 * @param {Number[]} rgba - The RGB color model values array, values in range [0, 255]
 * @returns {string} HEX/HEXA value string with Hash symbol and uppercase value symbols.
 */
export default function rgb2hex(rgba) {
  // check the presence of alpha channel
  // if present: map [0, 1] -> [0, 255]
  const alpha = rgba[3];
  if (alpha && alpha <= 1 && alpha >= 0) {
    rgba[3] = Math.round(alpha * 255);
  }

  let hex = [...rgba].map(value => value.toString(16))
  // shorthand check #AABBCCDD -> #ABC
  if (hex.every(value => value[0] === value[1])) {
    hex = hex.map(value => value[0]);
  }

  return `#${hex.join("").toUpperCase()}`;
}
