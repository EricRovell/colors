import { writable } from "svelte/store";
import Color from "@src/model/Color.js";

function colorStore() {
  // color master class
  const color = new Color();
  // store
  const { subscribe, set, update } = writable(color);

  function setColor(data) {
    update(color => {
      color.value = data;
      return color;
    });
  }

  return {
    subscribe,
    setColor,
  };
}

export const color = colorStore();
