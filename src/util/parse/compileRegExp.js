/**
 * Compiles a regular expression object from different parts
 * @param {object} params - Parameters object
 * @param {[string|RegExp]} params.parts - Array of strings or regexp literals to merge 
 * @param {string} params.flags - Flags to include in merged regular expression
 * @returns {RegExp} Merged reugular expression literal
 */
export default function compileRegExp({ parts, flags = "i" }) {
  return new RegExp(
    parts.reduce((acc, expression) => {
      return (expression instanceof RegExp)
        ? acc + expression.source
        : acc + expression
    }, "")
  , flags);
}
