import { writable } from "svelte/store";

import Color from "@src/model/Color.js";

function colorStore() {
  const color = new Color();
  const { subscribe, set, update } = writable(color);

  return {
    subscribe,
    setColor: string => update(color => {
      color.colorFromString(string);
      return color;
    }),
    model: color.model,
    valid: () => color.valid
  };
}

export const color = colorStore();
