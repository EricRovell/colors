export default class ColorRGB {
  constructor(values) {
    [ this.r, this.g, this.b ] = (Array.isArray(values))
      ? values
      : [ values.r, values.g, values.b ];
  }

  setValue({ r, g, b }) {
    [ this.r, this.g, this.b ] = [ r, g, b];
  }

  static validate(values) {
    return (
      Array.isArray(values) &&
      values.length === 3 &&
      values.every(value => value >= 0 && value <= 255)
    );
  }

  get properties() {
    return [
      { 
        property: "r",
        color: "red",
        value: this.r,
        percentage: Math.round(this.r * 100 / 255)
      },
      { 
        property: "g",
        color: "green",
        value: this.g,
        percentage: Math.round(this.g * 100 / 255)
      },
      { 
        property: "b",
        color: "blue",
        value: this.b,
        percentage: Math.round(this.b * 100 / 255)
      },
    ]
  }

  get percentage() {
    return {
      r: Math.round(this.r * 100 / 255),
      g: Math.round(this.g * 100 / 255),
      b: Math.round(this.b * 100 / 255),
    };
  }

  get data() {
    return {
      model: "rgb",
      value: {
        r: this.r,
        g: this.g,
        b: this.b
      }
    };
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

  get randomArray() {
    return new Array(3)
      .fill()
      .map(() => Math.floor(Math.random() * 255))
  }
}
