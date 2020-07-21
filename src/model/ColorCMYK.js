export default class ColorCMYK {
  constructor(values) {
    [ this.c, this.m, this.y, this.k ] = (Array.isArray(values))
      ? values
      : [ values.c, values.m, values.y, values.k ];
  }

  get data() {
    return {
      model: "cmyk",
      values: {
        c: this.c,
        m: this.m,
        y: this.y,
        k: this.k
      }
    };
  }

  setValue({ c, m, y, k }) {
    [ this.c, this.m, this.y, this.k ] = [ c, m, y, k ];
  }

  static validate(values) {
    return (
      Array.isArray(values) &&
      values.length === 4 &&
      values.every(value => value >= 0 && value <= 100)
    );
  }

  get properties() {
    return [
      { 
        property: "c",
        color: "cyan",
        value: this.c,
        percentage: this.c,
      },
      { 
        property: "m",
        color: "magenta",
        value: this.m,
        percentage: this.m,
      },
      { 
        property: "y",
        color: "yellow",
        value: this.y,
        percentage: this.y,
      },
      { 
        property: "k",
        color: "black",
        value: this.k,
        percentage: this.k,
      },
    ] 
  }

  get percentage() {
    return {
      c: this.c,
      m: this.m,
      y: this.y,
      k: this.k
    };
  }

  get asArray() {
    return [ this.c, this.m, this.y, this.k ];
  }

  get toString() {
    return `${this.c} ${this.m} ${this.y} ${this.k}`;
  }

  get cssString() {
    return "no support";
  }

  get randomArray() {
    return new Array(4)
      .fill()
      .map(() => Math.floor(Math.random() * 100))
  }
}
