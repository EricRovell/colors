<script>
  import { color } from "@stores/colorStore.js";
  import { parser } from "@stores/parserStore.js";

  let { lastResult } = parser;

  // current choice
  let group = $lastResult[0];
  // update color to current choice
  $: color.setColor(group);
</script>

<div class="suggestions">
  {#each $lastResult as suggestion}
    <label>
      <input type="radio" bind:group value={suggestion}>
      <span>
        {`is it ${suggestion?.model?.toUpperCase()}?`}
      </span>
    </label>
  {/each}
</div>

<style>
  .suggestions {
    display: flex;
  }

  .suggestions input {
    display: none
  }

  .suggestions span {
    background: white;
    padding: 0.25em 0.5em;
    border-radius: 5px;
    font-size: 1em;
    user-select: none;
    cursor: pointer;
  }

  .suggestions label:not(:first-child) {
    margin-left: 5px;
  }

  .suggestions input:checked + span {
    background: red;
  }
</style>
