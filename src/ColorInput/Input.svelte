<script>
  import { color } from "@stores/colorStore.js";

  import Palette from "@components/svg/Palette.svelte";
  import Dice from "@components/svg/Dice.svelte";
  import Search from "@components/svg/Search.svelte";
  import Cancel from "@components/svg/Cancel.svelte";

  export let value = "";
  export let clearInput;
  export let randInput;
</script>

<div class="container">
  <div class="color-search">
    <Palette />
    <input
      type="text"
      bind:value
      placeholder="Type any color value...">
    <Cancel
      visible={!!value.length}
      actionClick={clearInput} />
    <Dice handleClick={randInput} />
    <Search />
  </div>
  <div class="control-panel">
    <slot />
  </div>
</div>

<style>
  .container {
    display: grid;
    row-gap: 10px;
    width: 100%;

    padding-top: 10px;
    background: var(--bg);
    position: sticky;
    top: 0;

    z-index: 100;
  }

  .control-panel {
    display: grid;
    row-gap: 0.25em;
    font-family: "Inconsolata", sans-serif;
    font-size: 1em;
  }
  .color-search {
    --height: 55px;
    --icon-size: calc(0.5 * var(--height));

    display: grid;
    grid-auto-flow: column;
    grid-template: var(--height) / var(--icon-size) 1fr repeat(3, var(--icon-size));
    column-gap: 10px;
    place-items: center;

    background: white;
    border-radius: 10px;
    width: 100%;
    overflow: hidden;
    padding: 0 0.75em;
    filter: drop-shadow(1px 1px 5px rgb(0 0 0 / 0.1));

    font-family: MuseoModerno;
    font-weight: 500;
    color: rgb(18 18 31);

    transition: filter 0.15s ease-in-out;
  }

  .color-search:focus-within,
  .color-search:hover {
    /* border: 1px solid red; */
    filter:
      drop-shadow(1px 1px 5px rgb(0 0 0 / 0.1))
      drop-shadow(1px 1px 10px rgb(0 0 0 / 0.25));
  }

  .color-search:focus-within :global(svg:last-child) {
    background: #EEF4FF; /* #678EFE */
  }

  input[type=text] {
    background: none;
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    text-overflow: ellipsis;
    transition: transform 0.15s ease-out;
  }

  input:focus {
    outline: none;
    border: none;
  }

  input:focus::placeholder {
    opacity: 0;
  }

  input::placeholder {
    font-family: inherit;
  }

  :global(.color-search svg)  {
    width: var(--icon-size);
    height: var(--icon-size);
    z-index: 2;
    cursor: pointer;
  }
</style>

