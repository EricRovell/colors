export default class ColorCMYK {
  constructor({ c, m, y, k, values } = { values: [0, 0, 0, 0] }) {
    
    if (values && Array.isArray(values)) {
      [ this.c, this.m, this.y, this.k ] = values;
      return this;
    }
    
    this.c = +c;
    this.m = +m;
    this.y = +y;
    this.k = +k;
  }

  setValue({ c, m, y, k }) {
    [ this.c, this.m, this.y, this.k ] = [ c, m, y, k ];
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

  get toString() {
    return `cmyk ${this.c}% ${this.m}% ${this.y}% ${this.k}%`
  }

  get cssString() {
    return "no support";
  }
}
