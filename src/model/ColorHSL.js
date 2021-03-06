export default class ColorHSL {
  constructor(values) {
    [ this.h, this.s, this.l ] = (Array.isArray(values))
      ? values
      : [ values.h, values.s, values.l ];
  }

  get model() {
    return "hsl";
  }

  get data() {
    return {
      model: "hsl",
      values: {
        h: this.h,
        s: this.s,
        l: this.l
      }
    };
  }

  setValue({ h, s, l }) {
    [ this.h, this.s, this.l ] = [ h, s, l ];
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

  get randomArray() {
    return [
      Math.floor(Math.random() * 359),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ];
  }

  generateShades(shades) {
    const colors = [];
    const step = Math.ceil(50 / shades);
    for (let lightness = 50; lightness >= 0; lightness -= step) {
      colors.push({
        model: "hsl",
        values: [ this.h, this.s, lightness ]
      });
    }

    return colors;
  }

  generateTints(tints) {
    const colors = [];
    const step = Math.ceil(50 / tints);
    for (let lightness = 50; lightness <= 100; lightness += step) {
      colors.push({
        model: "hsl",
        values: [ this.h, this.s, lightness ]
      });
    }

    return colors;
  }

  static modulo(x, n) {
    return (x % n + n) % n;
  }

  rotateHue(angle) {
    return ColorHSL.modulo(this.h + angle, 360);
  }

  get analogous() {
    return [
      {
        model: "hsl",
        values: [ this.rotateHue(30), this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.h, this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(330), this.s, this.l ]
      },
    ];
  }

  get complementary() {
    return [
      {
        model: "hsl",
        values: [ this.h, this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(180), this.s, this.l ]
      }
    ];
  }

  get splitComplementary() {
    return [
      {
        model: "hsl",
        values: [ this.rotateHue(150), this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.h, this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(210), this.s, this.l ]
      },
    ];
  }

  get triadic() {
    return [
      {
        model: "hsl",
        values: [ this.rotateHue(120), this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.h, this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(240), this.s, this.l ]
      },
    ];
  }

  get tetradic() {
    return [
      {
        model: "hsl",
        values: [ this.h, this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(120), this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(180), this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(300), this.s, this.l ]
      }
    ];
  }

  get square() {
    return [
      {
        model: "hsl",
        values: [ this.h, this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(90), this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(180), this.s, this.l ]
      },
      {
        model: "hsl",
        values: [ this.rotateHue(270), this.s, this.l ]
      }
    ];
  }

  get monochromatic() {
    const colors = [];
    let start, end;
    let range = 15;

    let [ left, right ] = [ this.l - range, this.l + range ]

    if (left > 0 && right < 100) {
      [ start, end ] = [ left, right ]
    } else if (left < 0) {
      [ start, end ] = [ 0, 50 ];
    } else if (right > 100) {
      [ start, end ] = [ 50, 85 ];
    }

    const step = Math.floor((end - start) / 5);

    for (let lightness = start; lightness <= end; lightness += step) {
      colors.push({
        model: "hsl",
        values: [ this.h, this.s, lightness ]
      });
    }

    return colors;
  }
  
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
*/
}
