import regex from "./regex.js";

export default function determineColorString(str) {
  if (!str) return null;

  for (let expression in regex) {
    if (str.match(regex[expression])) {
      return expression;
    }
  }
  return null;
}
