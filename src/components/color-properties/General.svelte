<script>
  import { color } from "@stores/colorStore.js";

  import Color from "@components/Color.svelte";
  import ColorTable from "@components/ColorTable.svelte";

  $: rgb = $color.rgb;
  $: cmyk = $color.cmyk;
</script>

<div class="container">
  <div class="color-container">
    <Color data={$color.data} />
  </div>
  <div class="description">
    <p>{`In RGB color space, this color is composed of ${rgb.percentage.r}% red, ${rgb.percentage.g}% green, and ${rgb.percentage.b}% blue.`}</p>
    <ColorTable data={rgb.properties} />
    <p>{`In CMYK color space, this color is composed of ${cmyk.percentage.c}% cyan, ${cmyk.percentage.m}% magenta, ${cmyk.percentage.y}% yellow, and ${cmyk.percentage.k}% black.`}</p>
    <ColorTable data={cmyk.properties} />
    <p>{`It has a hue angle of 0 degrees, saturation of 5% and a lightness of 78%.`}</p>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template: auto / 135px 1fr;
    place-items: center;
    column-gap: 1.5em;

    font-family: "Inconsolata", sans-serif;
  }

  .color-container {
    align-self: start;
  }

  .description {
    display: grid;
    row-gap: 0.85em;
  }

  @media screen and (max-width: 500px) {
    .container {
      grid-template: auto auto / 1fr;
      place-items: center;
      row-gap: 1.5em;
    }
  }
</style>