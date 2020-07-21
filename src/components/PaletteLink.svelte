<script>
  import Color from "@src/model/Color.js";
  import ColorLink from "@components/ColorLink.svelte";

  export let colors = [];
</script>

<!--
  @component
  Palette Link Component is lightweight collection of colors.
  In comparison to Palette Component it provides only the visual color
  representation and link to color page for more information about
  particular color.

  Props:
    - colors: [{ model: string, values: [Number] }],
    an array of constructor color data objects

  Wraps together Color Components into a Palette.
  Each Color component get according Color instance model from factory.
-->
<div>
  <ol>
    {#each colors as { model, values }}
      <li>
        <ColorLink color={Color.model({ model, values })} />
      </li>
    {:else}
      <p>Something is definetly wrong...</p>
    {/each}
  </ol>
</div>

<style>
  div {
    display: grid;
    width: 100%;
    height: 100%;  
  }

  ol {
    display: grid;
    grid-auto-flow: column;
    place-content: start;
    overflow-x: auto;
  }
</style>
