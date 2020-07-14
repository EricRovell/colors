<script>
  import { color } from "@stores/colorStore.js";

  import Color from "@components/Color.svelte";
  import ColorTable from "@components/ColorTable.svelte";
</script>

<div class="container">
  <div>
    <Color data={$color.data} />
  </div>
  <ColorTable data={$color.rgb.properties} />
  <ColorTable data={$color.cmyk.properties} />
</div>

<style>
  .container {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    column-gap: 20px;
  }

  div {
    grid-row: 1 / span 2;
    grid-column: 1;
  }
</style>