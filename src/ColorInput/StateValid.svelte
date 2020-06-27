<script>
  import ModelRepr from "@components/ModelRepr.svelte";
  import Opacity from "@components/Opacity.svelte";

  export let model = null;
  export let alpha = null;
  export let value = null;
</script>

<style>
  div {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    place-items: center;
    column-gap: 1.5em;
  }
</style>

<div>
  <span>
    {model.toUpperCase()}
  </span>
  <span>
    <ModelRepr {value} />
  </span>
  <span>
    <Opacity
      opacity={alpha}
      model={model} />
  </span>
</div>
