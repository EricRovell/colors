<script>
  import CircularChart from "@components/svg/CircularChart.svelte";

  export let data;
</script>

<style>
  .grid-view {
    display: grid;
    grid-auto-flow: column;
    column-gap: 1em;
    place-content: center;
  }

  .grid-view :global(svg) {
    --size: 40px;
  }
</style>

<div class="grid-view">
  {#each data as { property, color, value, percentage }}
    <CircularChart
      {color}
      text={value}
      progress={percentage} />
  {/each}
</div>
