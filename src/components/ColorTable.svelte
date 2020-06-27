<script>
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
  {#each Object.entries(value) as [ prop, val ]}
    <div>
      <span>{prop}</span>
      <span>{val}</span>
    </div>
  {/each}
</div>
