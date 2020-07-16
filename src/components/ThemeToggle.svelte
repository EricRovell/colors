<script>
  import Moon from "@components/svg/Moon.svelte";
</script>

<div>
  <Moon />
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }

  div :global(svg) {
    width: 1.5em;
    height: 1.5em;
  }
</style>