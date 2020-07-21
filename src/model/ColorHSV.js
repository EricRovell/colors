export default  class ColorHSV {
  constructor(values) {
    [ this.h, this.s, this.v ] = (Array.isArray(values))
      ? values
      : [ values.h, values.s, values.v ];
  }

  get data() {
    return {
      model: "hsv",
      values: {
        h: this.h,
        s: this.s,
        v: this.v
      }
    };
  }

  setValue({ h, s, v }) {
    [ this.h, this.s, this.v ] = [ h, s, v ];
  }

  static validate(values) {
    if (
      !Array.isArray(values) ||
      values.length !== 3 ||
      !values.every(Number.isInteger)
    ) {
      return false;
    }

    if (
      values[0] < 0 || values > 359 ||
      values[1] < 0 || values[1] > 100 ||
      values[2] < 0 || values[2] > 100
    ) {
      return false;
    }

    return true;
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

  get asArray() {
    return [ this.h, this.s, this.v ];
  }

  get toString() {
    return `${this.h} ${this.s} ${this.v}`;
  }

  get cssString() {
    return `hsv(${this.h}deg ${this.s}% ${this.v}%)`;
  }

  get randomArray() {
    return [
      Math.floor(Math.random() * 359),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ];
  }

  
}
