export default function modelData({ model, type, match }) {

  function calcAlpha(value) {
    if (!value) return 1;
    console.log(value);

    if (model === "hex") {
      return (value.length === 2)
        ? Number((parseInt(value, 16) / 255).toFixed(2))
        : Number((parseInt(value, 16) / 15).toFixed(2))
    }

    if (value.endsWith("%")) {
      return Number(value.replace("%", "")) / 100;
    }

    return Number(value);
  }

  // common props
  const data = {
    model,
    alpha: calcAlpha(match[4]),
    //...(type && { type })
  };

  switch(model) {

    case "hex":
      return {
        ...data,
        value: [
          { 
            property: "red",
            value: match[1],
            percentage: (type === "shorthand")
              ? Math.round(parseInt(match[1], 16) / 15 * 100)
              : Math.round(parseInt(match[1], 16) / 255 * 100)
          },
          { 
            property: "blue",
            value: match[2],
            percentage: (type === "shorthand")
              ? Math.round(parseInt(match[2], 16) / 15 * 100)
              : Math.round(parseInt(match[2], 16) / 255 * 100)
          },
          { 
            property: "green",
            value: match[3],
            percentage: (type === "shorthand")
              ? Math.round(parseInt(match[3], 16) / 15 * 100)
              : Math.round(parseInt(match[3], 16) / 255 * 100)
          },
        ]
      };

    case "rgb":
      return {
        ...data,
        value: {
          red: +match[1],
          green: +match[2],
          blue: +match[3],
        },
        value: [
          { 
            property: "red",
            value: +match[1],
            percentage: (type === "absolute")
              ? Math.round(+match[1] * 100 / 255)
              : +match[1],
            ...((type === "percent") && { percent: true })
          },
          { 
            property: "blue",
            value: +match[2],
            percentage: (type === "absolute")
              ? Math.round(+match[2] * 100 / 255)
              : +match[2],
            ...((type === "percent") && { percent: true })
          },
          { 
            property: "green",
            value: +match[3],
            percentage: (type === "absolute")
              ? Math.round(+match[3] * 100 / 255)
              : +match[3],
            ...((type === "percent") && { percent: true })
          },
        ]
      };

    case "hsl":
      return {
        ...data,
        value: [
          { 
            property: "hue",
            value: +match[1],
            percentage: Math.round(+match[1] * 100 / 359),
          },
          { 
            property: "saturation",
            value: +match[2],
            percentage: +match[2],
            percent: true
          },
          { 
            property: "lightness",
            value: +match[3],
            percentage: +match[3],
            percent: true
          },
        ]
      };

    case "hsv":
      return {
        ...data,
        value: [
          { 
            property: "hue",
            value: +match[1],
            percentage: Math.round(+match[1] * 100 / 359),
          },
          { 
            property: "saturation",
            value: +match[2],
            percentage: +match[2],
            percent: true
          },
          { 
            property: "value",
            value: +match[3],
            percentage: +match[3],
            percent: true
          },
        ]
      };

    case "cmyk":
      return {
        ...data,
        alpha: calcAlpha(match[5]),
        value: [
          { 
            property: "cyan",
            value: +match[1],
            percentage: +match[1],
            percent: true
          },
          { 
            property: "magenta",
            value: +match[2],
            percentage: +match[2],
            percent: true
          },
          { 
            property: "yellow",
            value: +match[3],
            percentage: +match[3],
            percent: true
          },
          { 
            property: "black",
            value: +match[4],
            percentage: +match[4],
            percent: true
          },
        ]  
      };
  }
}