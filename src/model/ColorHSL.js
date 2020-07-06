export default class ColorHSL {
  constructor({ h = 0, s = 0, l = 0, values }) {
    
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

  validate({ h, s, l }) {
    [ h, s, l ] = [ h, s, l ].map(Number);

    if (![ h, s, l ].every(value => Number.isInteger(value))) {
      [ h, s, l ] = [ 0, 0, 0];
    }

    return {
      h, s, l
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
        property: "l",
        value: this.l,
        percentage: this.l,
      },
    ]
  }

  get asArray() {
    return [ this.h, this.s, this.l ];
  }

  get toString() {
    return `${this.h} ${this.s} ${this.l}`;
  }

  get cssString() {
    return `hsl(${this.h}deg ${this.s}% ${this.l}%)`;
  }

  get randomString() {
    return "hsl" + [
      Math.floor(Math.random() * 359),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ].join(" ")
  }

  /* */

  static modulo(x, n) {
    return (x % n + n) % n;
  }

  rotateHue(angle) {
    this.h = ColorHSL.modulo(this.h + angle, 360);
    return this.h;
  }

  get complementary() {
    return this.rotateHue(180);
  }

  /*
  const getTriadic = color => {
    const first = rotateHue(120);
    const second = rotateHue(-120);
    return [first(color), second(color)];
  }
  */

  /*
  const saturate = x => ({saturation, ...rest}) => ({
  ...rest,
  saturation: Math.min(1, saturation + x),
  });
  const desaturate = x => ({saturation, ...rest}) => ({
    ...rest,
    saturation: Math.max(0, saturation - x),
  });
  const lighten = x => ({lightness, ...rest}) => ({
    ...rest,
    lightness: Math.min(1, lightness + x)
  });
  const darken = x => ({lightness, ...rest}) => ({
    ...rest,
    lightness: Math.max(0, lightness - x)
  });

  const isGrayscale = ({saturation}) => saturation === 0;
  const isDark = ({lightness}) => lightness < .5;
*/
}
