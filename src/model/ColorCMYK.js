export default class ColorCMYK {
  constructor({ c = 0, m = 0, y = 0, k = 0 }) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
  }

  setValue({ c, m, y, k }) {
    [ this.c, this.m, this.y, this.k ] = [ c, m, y, k ];
  }

  validate({ c, m, y, k }) {
    [ c, m, y, k ] = [ c, m, y, k ].map(Number)

    if (![ c, m, y, k ].every(value => Number.isInteger(value))) {
      [ c, m, y, k ] = [ 0, 0, 0];
    }

    return {
      c, m, y, k
    };
  }

  get properties() {
    return [
      { 
        property: "c",
        value: this.c,
        percentage: this.c,
      },
      { 
        property: "m",
        value: this.m,
        percentage: this.m,
      },
      { 
        property: "y",
        value: this.y,
        percentage: this.y,
      },
      { 
        property: "k",
        value: this.k,
        percentage: this.k,
      },
    ] 
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

  get randomString() {
    return "cmyk " + new Array(4)
      .fill()
      .map(() => Math.floor(Math.random() * 100))
      .join(" ");
  }
}
