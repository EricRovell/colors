<script>
  import Grid from "@components/svg/Grid.svelte";
  import Link from "@components/svg/Link.svelte";

  export let row = false;
  export let href;
</script>

<div>
  <Grid handleClick={() => row = !row} />
  <Link {href} />
</div>

<style>
  div {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1em;
    grid-template-rows: 1em;
    grid-column-gap: 0.5em;
  }
</style>