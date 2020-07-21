// https://github.com/ItalyPaleAle/svelte-spa-router

import SearchColor from "./Search/SearchColor.svelte";
import Help from "@routes/Help.svelte";
import About from "@routes/About.svelte";
import ColorPage from "@routes/ColorPage.svelte";
import PalettePage from "@routes/PalettePage.svelte";

export default {
  // exact
  "/": SearchColor,
  "/help": Help,
  "/about": About,

  // with named params
  // ex: /#/rgb/12,12,12
  "/color/:model/:values": ColorPage,
  "/palette/:colors": PalettePage
};
