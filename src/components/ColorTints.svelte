<script>
  import { color } from "@stores/colorStore.js";
  import Palette from "@components/Palette.svelte";

  $: tints = {
    model: "hsl",
    values: $color.generateTints(10)
  };
</script>

<Palette colors={tints} />