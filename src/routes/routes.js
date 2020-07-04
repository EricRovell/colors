// https://github.com/ItalyPaleAle/svelte-spa-router

import ColorSearch from "./ColorSearch.svelte";

import NamedRoute from "@routes/NamedRoute.svelte";

export default {
  // exact
  "/": ColorSearch,

  // with named params
  // ex: /#/rgb/12,12,12
  "/:model/:values": NamedRoute
};
