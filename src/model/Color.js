export default class Color {
  constructor({ hex, rgb, hsl, hsv, cmyk, name }) {
    this.model = "hex";
    // the main color is RGB under the hood
    // the reason: any present model can be easily converted to RGB in one "step"
    this.color = [ 0, 0, 0 ];
    //
    this.models = {
      hex: this.hex,
      rgb: this.rgb,
      hsl: this.hsl,
      hsv: this.hsv,
      cmyk: this.cmyk,
      name: this.name
    };
  }
  
}
