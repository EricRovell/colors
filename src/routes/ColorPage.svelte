<script>
  import Color, { Constructor } from "@components/Color.svelte";

  export let params = {};

  function validateURL(params) {
    const model = params.model;
    const values = params.values.split(",").map(Number);

    if (Constructor.validate({ model, values })) {
      return {
        model,
        values
      };
    } else {
      return null;
    }
  }

  $: data = validateURL(params);
  $: console.log(data);
</script>

{#if data}
  <div>
    <Color {data} />
  </div>
{:else}
  <p>Wrong URL</p>
{/if}
