<script>
  import { color } from "@stores/colorStore.js";
  import PaletteLink from "@components/PaletteLink.svelte";

  let palettes = $color.constructor.availablePalettes;
</script>

<div class="wrapper">
  {#each palettes as palette}
    <h4>{palette}</h4>
    <PaletteLink colors={$color.getPalette(palette)} />
  {:else}
    <p>Something is wrong...</p>
  {/each}
</div>

<style>
  .wrapper {
    display: grid;
    row-gap: 1.5em;
  }
</style>
