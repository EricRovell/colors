class ColorRGB {
  constructor({ rgb, hsl }) {
    [
      this.red,
      this.green,
      this.blue
    ] = rgb ?? ColorRGB.fromHSL(hsl);
  }

  get toString() {
    return `rgb(${this.red} ${this.green} ${this.blue})`;
  }
}

const x = new ColorRGB({ hsl: [ 223, 0.25, 0.48 ]});
console.log(x.toString);