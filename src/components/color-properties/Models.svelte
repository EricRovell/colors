<script>
  import { color } from "@stores/colorStore.js";
</script>

<div>
  {#each Object.entries($color.modelsString) as [ model, value ]}
    <span class="model">{model.toUpperCase()}</span>
    <span class="value">{value}</span>
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-auto-columns: max-content max-content;
    row-gap: 0.25em;

    font-size: 1.2em;
    font-family: "Inconsolata", sans-serif;
  }

  div > span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .model {
    justify-content: center;

    padding: 0.1em 0.35em;
    background: black;
    border-radius: 5px 0 0 5px;
    color: white;
  }

  .value {
    border: 1px solid rgb(0 0 0 / 0.35);
    border-radius: 0 5px 5px 0;
    padding: 0 0.75em;
  }
  
</style>