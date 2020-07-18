<script>
  import Color from "@components/Color.svelte";

  export let colors = [];
</script>

<div class="palette">
  <!--
    Data represented as an array of color data construct
    Example: [
      {
        model: string,
        value: object|array
    }
    ]
  -->
  {#if Array.isArray(colors)}
    {#each colors as color}
      <Color data={color} />
    {:else}
      <p>Empty</p>
    {/each}
  <!--
    Data represented as an object of color data construct for one model
    Example: {
      model: string,
      values: [
        object|array,
        object|array...
      ]
    }
  -->
  {:else}
    {#each colors.values as color}
      <Color data={{ model: colors.model, value: color }} />
    {:else}
      <p>Empty</p>
    {/each}
  {/if}
</div>

<style>
  .palette {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    gap: 5px;
    place-content: start;
  }
</style>