<script>
  import Color from "@src/model/Color.js";
  import contrast from "@util/contrast.js";

  import Change from "@components/svg/Change.svelte";

  export let data;

  $: color = new Color(data);

  let activeModel = "rgb";
  let contrastColor;

  $: console.log(color);
</script>


<div
  class="color"
  style="--color-instance-bg:{color.model.rgb.cssString}; --color-instance-contrast: {color.contrast}">
  <header>
    <span class="model">{activeModel}</span>
    <Change title="Change model" />
  </header>
  <div class="values">
    {#each color.model.rgb.properties as { value }}
      <span>{value}</span>
    {/each}
  </div>
</div>


<style>
  .color {
    display: grid;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background: var(--color-instance-bg, white);
    color: var(--color-instance-contrast, black);
    transition: background 0.2s linear;
  }

  .color .values {
    display: inherit;
  }

  .color :global(svg) {
    width: 25px;
    height: 25px;
    fill: var(--color-instance-contrast, black);
  }
</style>