<script>
  //import Header from "@src/layout/Header.svelte";
  import LayoutMain from "@src/layout/LayoutMain.svelte";
  import ColorInput from "../ColorInput/ColorInput.svelte";
</script>

<LayoutMain>
  <ColorInput />
</LayoutMain>

<style>
  :global(:root *) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>