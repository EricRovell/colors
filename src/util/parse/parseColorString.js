import { writable } from "svelte/store";
import regex from "./regex.js";

export default class ColorParser {
  constructor() {
    this.expressions = regex;
    this.history = writable([]);
    this.query = writable([]);
    this.limit = 15;

    console.log(`Parser init`);
  }

  parseString(string) {
    const matches = [];

    for (let [ expression, model ] of this.expressions.entries()) {
      let match = string.match(expression);
      if (match) {

        const value = (model === "hex")
          ? match.groups
          : ColorParser.processGroups(match.groups);

        matches.push({
          model,
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

  static processGroups({ opacity, ...rest }) {
    // deal with opacity value
    const values = (opacity === undefined)
      ? rest
      : { ...rest, opacity };

    return Object.fromEntries(
      Object.entries(values)
        .map(([ key, value ]) => [ key, Number(value) ])
    );
  }

  get lastResult() {
    return this.query;
  }

  get searchHistory() {
    return this.history;
  }

}
