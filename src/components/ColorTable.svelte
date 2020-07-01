<script>
  import CircularChart from "@components/svg/CircularChart.svelte";

  export let value;
</script>

<style>
  .grid-view {
    display: grid;
    grid-auto-flow: column;
    column-gap: 1em;
  }

  .grid-view > div {
    display: grid;
    place-items: center;
    row-gap: 1em;
  }
</style>

<div class="grid-view">
  {#each value as { property, value, percentage, percent }}
    <div>
      <span>{property}</span>
      <CircularChart {value} progress={percentage} {percent} />
    </div>
  {/each}
</div>
