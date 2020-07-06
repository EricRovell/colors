import regex from "./regex.js";

export default class ColorParser {
  constructor() {
    this.models = regex;
    this.history = [];
    this.limit = 15;
    console.log(`Parser init`);
  }

  parseString(string) {
    const matches = [];
    // check every expression
    for (let expression of this.models) {
      let match = string.match(expression.expression);
      if (match) {
        matches.push({
          model: expression.model,
          type: expression.type,
          values: match.groups
        });
      }
    }

    if (matches.length) {
      this.history.push(matches);
      return matches
    }

    return [];
  }

  get lastResult() {
    return this.history[this.history.length - 1];
  }

  get searchHistory() {
    return this.history;
  }


}
