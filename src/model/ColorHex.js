export default class ColorHex {
  constructor({ r, g, b, string } = { r: "00", g: "00", b: "00" }) {
    // check if shorthand
    if ([ r, g, b ].every(value => value?.length === 1)) {
      this.type = "shorthand";

      this.r = r + r;
      this.g = g + g;
      this.b = b + b;
      return this;
    }

    /* if (string && typeof string === "string") {
      [ this.r, this.g, this.b ] = values;
      return this;
    } */
    
    this.r = r;
    this.g = g;
    this.b = b;
  }

  setValue({ r, g, b }) {
    [ this.r, this.g, this.b ] = [ r, g, b ];
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

  get toString() {
    return `hex #${this.r}${this.g}${this.b}`
  }

  get cssString() {
    return `#${this.r}${this.g}${this.b})`;
  }
}

let x = new ColorHex({ r: "af", g: 25, b: "e8" });
