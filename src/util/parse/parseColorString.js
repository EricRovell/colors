import { writable } from "svelte/store";
import regex from "./regex.js";

export default class ColorParser {
  constructor() {
    this.models = regex;
    this.history = writable([]);
    this.query = writable([]);
    this.limit = 15;
    console.log(`Parser init`);
  }

  parseString(string) {
    const matches = [];
    // check every expression
    for (let expression of this.models) {
      let match = string.match(expression.expression);
      if (match) {
        // deal with opacity value
        if (match.groups.opacity === undefined) {
          delete match.groups.opacity
        }
        // convert string to numbers, we get only numeric data
        // HEX model is edge case, we need string values here
        let value = (expression.model !== "hex")
          ? Object.fromEntries(
              Object.entries(match.groups)
                .map(([ key, value ]) => [ key, Number(value) ])
            )
          : match.groups;

        matches.push({
          model: expression.model,
          type: expression.type,
          value
        });
      }
    }

    if (matches.length) {
      this.history.update(value => [ ...value, matches ]);
      this.query.set(matches);

      return matches
    }

    return [];
  }

  get lastResult() {
    return this.query;
  }

  get searchHistory() {
    return this.history;
  }

}
