export default  class ColorHSV {
  constructor({ h, s, v, values } = { values: [ 0, 0, 0 ] }) {
    
    if (values && Array.isArray(values)) {
      [ this.h, this.s, this.v ] = values;
      return this;
    }
    
    this.h = +h;
    this.s = +s;
    this.v = +v;
  }

  setValue({ h, s, v }) {
    [ this.h, this.s, this.v ] = [ h, s, v ];
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
        property: "value",
        value: this.v,
        percentage: this.v,
      },
    ]
  }

  get toString() {
    return `hsv ${this.h}deg ${this.s}% ${this.v}%`
  }

  get cssString() {
    return `hsv(${this.h}deg ${this.s}% ${this.v}%)`;
  }
}
