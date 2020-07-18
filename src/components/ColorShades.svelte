<script>
  import { color } from "@stores/colorStore.js";
  import Palette from "@components/Palette.svelte";

  $: shades = {
    model: "hsl",
    values: $color.generateShades(10)
  };
</script>

<Palette colors={shades} />