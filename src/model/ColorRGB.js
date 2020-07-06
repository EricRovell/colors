export default class ColorRGB {
  constructor({ r = 0, g = 0, b = 0, type = "absolute", values }) {
    this.type = type;

    if (values && Array.isArray(values)) {
      [ this.r, this.g, this.b ] = values;
      return this;
    }
    
    this.r = +r;
    this.g = +g;
    this.b = +b;
  }

  setValue({ r, g, b }) {
    [ this.r, this.g, this.b ] = [ r, g, b];
  }

  validate({ r, g, b }) {
    const rgb = [ r, g, b ]
      .map(Number)
      .map(value => {
        return (value >= 0 && value <= 255)
          ? value
          : 0
      });

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
        percentage: (this.type === "absolute")
          ? Math.round(this.r * 100 / 255)
          : this.r,
      },
      { 
        property: "g",
        value: this.g,
        percentage: (this.type === "absolute")
          ? Math.round(this.g * 100 / 255)
          : this.g,
      },
      { 
        property: "b",
        value: this.b,
        percentage: (this.type === "absolute")
          ? Math.round(this.b * 100 / 255)
          : this.b,
      },
    ]
  }

  get asArray() {
    return [ this.r, this.g, this.b ];
  }

  get toString() {
    return `${this.r} ${this.g} ${this.b}`;
  }

  get cssString() {
    return `rgb(${this.r} ${this.g} ${this.b})`;
  }

  get randomString() {
    const randRGB = new Array(3)
      .fill()
      .map(() => Math.floor(Math.random() * 255))

    return `rgb ${randRGB.join(" ")}`;
  }
}
