<script>
  import { color } from "@stores/colorStore.js";
  import { parser } from "@stores/parserStore.js";

  let { lastResult } = parser;

  // current choice
  let group = $lastResult[0];
  // update color to current choice
  $: color.setColor(group);
</script>

{#if $lastResult.length > 1}
  <div class="suggestions">
    {#each $lastResult as suggestion}
      <label>
        <input type="radio" bind:group value={suggestion}>
        <svg viewBox="0 0 455 453">
          <polyline points="53 223 172 343 402 109"  />
          <rect x="1" y="1" width="454" height="451.74" rx="75" />
        </svg>
        <span>
          {`is it ${suggestion.model.toUpperCase()}?`}
        </span>
      </label>
    {/each}
  </div>
{/if}

<style>
  .suggestions {
    display: flex;
  }

  .suggestions input {
    display: none
  }

  .suggestions label:not(:first-child) {
    margin-left: 5px;
  }

  /* .suggestions input:checked ~ span {
    background: red;
  } */

  input:checked ~ svg rect {
    opacity: 1;
  }

  input:checked ~ svg polyline {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  label {
    display: grid;
    grid-template: 1fr / auto max-content;
    column-gap: 0.5em;

    background: white;
    padding: 0.25em 0.5em;
    border-radius: 5px;
    font-size: 0.85em;
    user-select: none;
    cursor: pointer;
  }

  svg {
    width: 1em;
    height: 1em;
    stroke: red;
  }

  svg rect {
    fill: none;
    stroke-width: 35;
    stroke-miterlimit: 10;
    opacity: 0.4;
  }

  svg polyline {
    fill: none;
    stroke-width: 35;
    stroke-miterlimit: 10;

    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    transition: stroke-dashoffset 0.15s linear;
  }
</style>
