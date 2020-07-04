export default class ColorHSL {
  constructor({ h, s, l, values } = { values: [ 0, 0, 0 ] }) {
    
    if (values && Array.isArray(values)) {
      [ this.h, this.s, this.l ] = values;
      return this;
    }
    
    this.h = +h;
    this.s = +s;
    this.l = +l;
  }

  setValue({ h, s, l }) {
    [ this.h, this.s, this.l ] = [ h, s, l ];
  }

  get properties() {
    return [
      { 
        property: "h",
        value: this.h,
        percentage: Math.round(this.h * 100 / 359),
      },
      { 
        property: "s",
        value: this.s,
        percentage: this.s,
      },
      { 
        property: "l",
        value: this.l,
        percentage: this.l,
      },
    ]
  }

  get toString() {
    return `hsl ${this.h}deg ${this.s}% ${this.l}%`
  }

  get cssString() {
    return `hsl(${this.h}deg ${this.s}% ${this.l}%)`;
  }
}
