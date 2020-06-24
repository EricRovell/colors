class ColorHSL {
  constructor({ rgb, hsl }) {
    [
      this.hue,
      this.saturation,
      this.lightness
    ] = (hsl) ?? ColorHSL.fromRGB(rgb);
  }

  rotateHue(angle) {
    this.hue = ColorHSL.modulo(this.hue + angle, 360);
    return this.hue;
  }

  static modulo(x, n) {
    return (x % n + n) % n;
  }

  static fromRGB(rgb) {
    const [ r, g, b ] = rgb.map(value => value / 255);
    const [ min, max ] = [ Math.min(r, g, b), Math.max(r, g, b) ];
    const chroma = max - min;

    /* const hue = Math.atan2(
      Math.sqrt(3) * (g - b),
      2 * r - g - b
    ) * 180 / Math.PI; */

    const lightness = (max + min) / 2;

    const saturation = (max === min)
      ? 0
      : chroma / (1 - Math.abs(2 * lightness - 1));

    const hue = () => {
      if (chroma === 0) return 0;
      switch(max) {
        case (r): return 60 * (((g - b) / chroma) + (g < b ? 6 : 0));
        case (g): return 60 * ((b - r) / chroma + 2);
        case (b): return 60 * ((r - g) / chroma + 4);
      }
    };

    return [
      Number(hue().toFixed(1)),
      Number(saturation.toFixed(2)),
      Number(lightness.toFixed(2))
    ]
  }

  get toString() {
    return `hsl(${this.hue}deg ${this.saturation * 100}% ${this.lightness * 100}%)`;
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




const color = new ColorHSL({
  rgb: [ 26, 199, 5 ]
});

//console.log(color.toString);
console.log(color.hue);
console.log(color.rotateHue(725));
