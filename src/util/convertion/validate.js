export default function validate({ model, values }) {

  if (model === "rgb") {
    let { r, g, b } = values;
    const rgb = [ r, g, b ]
      .map(Number)
      .map(value => {
        return (value >= 0 && value <= 255)
          ? value
          : 0
      });

    return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2]
    };
  }

  if (model === "hex") {
    let { r, g, b } = values;
    const rgb = [ r, g, b ]
      .map(value => (value.toString().length === 2) ? value : value + value)

    return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2]
    };
  }

  if (model === "hsl") {
    let { h, s, l } = values;
    [ h, s, l ] = [ h, s, l ].map(Number);

    if (![ h, s, l ].every(value => Number.isInteger(value))) {
      [ h, s, l ] = [ 0, 0, 0];
    }

    return {
      h, s, l
    };
  }

  if (model === "hsv") {
    let { h, s, v } = values;
    [ h, s, v ] = [ h, s, v ].map(Number);
    
    if (![ h, s, v ].every(value => Number.isInteger(value))) {
      [ h, s, v ] = [ 0, 0, 0];
    }

    return {
      h, s, v
    };
  }

  if (model === "cmyk") {
    let { c, m, y, k } = values;

    [ c, m, y, k ] = [ c, m, y, k ].map(Number)

    if (![ c, m, y, k ].every(value => Number.isInteger(value))) {
      [ c, m, y, k ] = [ 0, 0, 0];
    }

    return {
      c, m, y, k
    };
  }

}