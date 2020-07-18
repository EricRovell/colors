<script>
  import { color } from "@stores/colorStore.js";
  import Palette from "@components/Palette.svelte";

  let palettes = $color.constructor.availablePalettes;

  let x = ["triadic"];

  console.log(x.length);
</script>

{#each palettes as palette}
  <div>
    <span>{palette}</span>
    <Palette colors={{
      model: "hsl",
      values: $color.getPalette(palette)
    }} />
  </div>
{:else}
  <p>Something is wrong...</p>
{/each}
