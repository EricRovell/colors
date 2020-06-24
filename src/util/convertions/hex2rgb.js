/**
 * Converts HEX/HEXA color string to RGB/RGBA model values.
 * @param {string} hex - The HEX/HEXA color model string. Hash symbol is optional.
 * @returns {Number[]} an array containing RGB model values in range [0, 255]
 */
export default function hex2rgb(hex) {
  hex = hex.replace("#", "");
  // split hex string into channels
  let channels = (hex.length === 3 || hex.length === 4)
    ? hex.match(/.{1}/g)
    : (hex.length === 6 || hex.length === 8)
    ? hex.match(/.{2}/g)
    : [ 0, 0, 0 ];

  return channels.map(value => parseInt(value, 16));
}
