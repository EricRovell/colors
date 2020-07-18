export default class ColorRGB {
  constructor(values) {
    [ this.r, this.g, this.b ] = (Array.isArray(values))
      ? values
      : [ values.r, values.g, values.b ];
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
