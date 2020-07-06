<script>
  import { color } from "@stores/colorStore.js";

  import ColorTable from "@components/ColorTable.svelte";
</script>

<div class="container">
  <div>
    Model
  </div>
  <ColorTable data={$color.model.rgb.properties} />
  <ColorTable data={$color.model.cmyk.properties} />
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