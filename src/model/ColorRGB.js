export default class ColorRGB {
  constructor({ r, g, b, type = "absolute", values } = { values: [ 0, 0, 0 ] }) {
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

  get toString() {
    return `rgb ${this.r} ${this.g} ${this.b}`
  }

  get cssString() {
    return `rgb(${this.r} ${this.g} ${this.b})`;
  }
}
