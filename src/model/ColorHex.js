export default class ColorHex {
  constructor({ r = "00", g = "00", b = "00" }) {
    // check if shorthand
    if ([ r, g, b ].every(value => value?.length === 1)) {
      this.type = "shorthand";

      this.r = r + r;
      this.g = g + g;
      this.b = b + b;
      return this;
    }
    
    this.r = r;
    this.g = g;
    this.b = b;
  }

  get data() {
    return {
      model: "hex",
      type: this.type,
      value: {
        r: this.r,
        g: this.g,
        b: this.b
      }
    };
  }

  setValue({ r, g, b }) {
    [ this.r, this.g, this.b ] = [ r, g, b ];
  }

  validate({ r, g, b }) {
    const rgb = [ r, g, b ]
      .map(value => (value.toString().length === 2) ? value : value + value)

    return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2]
    };
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

  get randomString() {
    return "#" + new Array(3)
      .fill()
      .map(() => Math.floor(Math.random() * 255).toString(16))
      .join("")
  }
}
