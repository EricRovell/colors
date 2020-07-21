import { writable } from "svelte/store";

import regex from "./regex.js";
import namedColors from "./named-css-colors.js";

export default class ColorParser {
  constructor() {
    this.expressions = regex;
    this.colorNames = namedColors;
    this.history = writable([]);
    this.query = writable([]);
    this.limit = 15;

    console.log(`Parser init`);
  }

  parseString(string) {
    // check for named color
    const named = this.checkForName(string);

    let match = (named)
      ? [ named ]
      : this.parseWithRegex(string)
    

    if (match.length) {
      this.history.update(value => [ ...value, match ]);
      this.query.set(match);
    }

    return match;
  }

  checkForName(string) {
    const hex = this.colorNames[string.toUpperCase()]
    if (hex) {
      return {
        model: "hex",
        values: {
          r: hex.slice(1, 3),
          g: hex.slice(3, 5),
          b: hex.slice(5)
        }
      };
    }

    return false;
  }

  parseWithRegex(string) {
    const matches = [];

    // parse with regex
    for (let [ expression, model ] of this.expressions.entries()) {
      let match = string.match(expression);
      if (match) {
        // hex has string values, others are numeral
        const values = (model === "hex")
          ? match.groups
          : ColorParser.processGroups(match.groups);

        matches.push({
          model,
          values
        });
      }
    }

    return matches;
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
