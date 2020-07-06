<script>
  import { color } from "@stores/colorStore.js";

  export let suggestions = [];
</script>

<div class="suggestions">
  {#each suggestions as data}
    <span on:click={() => color.setColor(data)}>
      {`is it ${data.model.toUpperCase()}?`}
    </span>
  {/each}
</div>

<style>
  .suggestions {
    display: flex;
  }

  .suggestions > span {
    background: white;
    padding: 0.25em 0.5em;
    border-radius: 5px;
    font-size: 1em;
    user-select: none;
    cursor: pointer;
  }

  .suggestions span + span {
    margin-left: 5px;
  }
</style>
