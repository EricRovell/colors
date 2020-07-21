export default class ColorHex {
  constructor(values) {
    [ this.r, this.g, this.b ] = (Array.isArray(values))
      ? values
      : [ values.r, values.g, values.b ];

    // check if shorthand
    [ this.r, this.g, this.b ].map(value => {
      return (value.length === 1)
        ? value + value
        : value
    });
  }

  get data() {
    return {
      model: "hex",
      values: {
        r: this.r,
        g: this.g,
        b: this.b
      }
    };
  }

  setValue({ r, g, b }) {
    [ this.r, this.g, this.b ] = [ r, g, b ];
  }

  static validate(values) {
    return (
      Array.isArray(values) &&
      values.length === 3 &&
      values.every(hex => {
        const value = parseInt(hex);
        return (
          value >= 0 &&
          value <= 255 &&
          hex.length === 2
        );
      })
    );
  }

  get properties() {
    return [
      { 
        property: "r",
        value: this.r,
        percentage: (this.type === "shorthand")
          ? Math.round(parseInt(this.r, 16) / 15 * 100)
          : Math.round(parseInt(this.r, 16) / 255 * 100)
      },
      { 
        property: "b",
        value: this.b,
        percentage: (this.type === "shorthand")
          ? Math.round(parseInt(this.g, 16) / 15 * 100)
          : Math.round(parseInt(this.g, 16) / 255 * 100)
      },
      { 
        property: "g",
        value: this.g,
        percentage: (this.type === "shorthand")
          ? Math.round(parseInt(this.b, 16) / 15 * 100)
          : Math.round(parseInt(this.b, 16) / 255 * 100)
      }
    ]
  }

  get asArray() {
    return [ this.r, this.g, this.b ];
  }

  get toString() {
    return `#${this.r}${this.g}${this.b}`
  }

  get cssString() {
    return `#${this.r}${this.g}${this.b})`;
  }

  get randomArray() {
    return new Array(3)
      .fill()
      .map(() => {
        const value = Math.floor(Math.random() * 255).toString(16);
        return (value.length === 2) ? value : value + value;
      });
  }
}
