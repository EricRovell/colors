import regex from "./regex.js";
import modelData from "./modelData.js";

export default function determineColorString(str) {
  // check every expression until 1st valid one
  for (let expression of regex) {
    let match = str.match(expression.expression);
    if (match) {
      return modelData({
        model: expression.model,
        type: expression.type,
        match
      });
    }
  }

  // none expression suited -> null
  return null;
}
