<script>
  import CircularChart from "@components/svg/CircularChart.svelte";

  export let data;
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
  {#each data as { property, color, value, percentage }}
    <div>
      <span>{property}</span>
      <CircularChart
        {color}
        text={property}
        progress={percentage} />
    </div>
  {/each}
</div>
