import randArrElement from "@util/math/randArrElement.js";

import randHEX from "./randHEX.js";
import randRGB from "./randRGB.js";
import randHSL from "./randHSL.js";
import randCMYK from "./randCMYK.js";

export default function randomColorString({ model, opaque, asString = false } = {}) {
  // available color models with rand generating functions
  const models = {
    hex: randHEX,
    rgb: randRGB,
    hsl: randHSL,
    hsv: randHSL,
    cmyk: randCMYK
  }

  // random model to generate if model not specified
  if (!model) model = randArrElement(Object.keys(models));

  if (asString) {
    const value = models[model]();
    return JSON
      .stringify(value)
      .replace(/\[|\]/g, "");
  }
  
  // access function by random key and return it's result
  return {
    model,
    value: models[model]()
  };
}
