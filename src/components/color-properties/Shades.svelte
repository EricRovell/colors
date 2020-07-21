<script>
  import { color } from "@stores/colorStore.js";
  import PaletteLink from "@components/PaletteLink.svelte";
</script>

<PaletteLink colors={$color.generateShades(10)} />
