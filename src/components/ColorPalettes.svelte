<script>
  import { color } from "@stores/colorStore.js";
  import Palette from "@components/Palette.svelte";

  let palettes = $color.constructor.availablePalettes;
</script>

<div class="wrapper">
  {#each palettes as palette}
    <div class="palette-container">
      <span>{palette}</span>
      <Palette colors={{
        model: "hsl",
        values: $color.getPalette(palette)
      }} />
    </div>
  {:else}
    <p>Something is wrong...</p>
  {/each}
</div>

<style>
  .wrapper {
    display: grid;
    row-gap: 1.5em;
  }

  .palette-container {
    display: grid;
    row-gap: 0.85em;
  }
</style>
