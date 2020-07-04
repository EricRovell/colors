import regex from "./regex.js";

export default function determineColorString(str) {
  // check every expression until 1st valid one
  for (let expression of regex) {
    let match = str.match(expression.expression);
    if (match) {
      return {
        model: expression.model,
        type: expression.type,
        values: match.groups
      };
    }
  }

  // none expression suited
  return null;
}
