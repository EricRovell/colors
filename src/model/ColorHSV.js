export default  class ColorHSV {
  constructor(values) {
    [ this.h, this.s, this.v ] = (Array.isArray(values))
      ? values
      : [ values.h, values.s, values.v ];
  }

  get data() {
    return {
      model: "hsv",
      value: {
        h: this.h,
        s: this.s,
        v: this.v
      }
    };
  }

  setValue({ h, s, v }) {
    [ this.h, this.s, this.v ] = [ h, s, v ];
  }

  validate({ h, s, v }) {
    [ h, s, v ] = [ h, s, v ].map(Number);
    
    if (![ h, s, v ].every(value => Number.isInteger(value))) {
      [ h, s, v ] = [ 0, 0, 0];
    }

    return {
      h, s, v
    };
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
