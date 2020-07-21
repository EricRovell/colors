<script context="module">
  import Color from "@src/model/Color.js";

  import Change from "@components/svg/Change.svelte";
  import Link from "@components/svg/Link.svelte";
  import Copy from "@components/svg/Copy.svelte";

  export const Constructor = Color;
</script>

<script>
  export let data;

  // construct color object
  $: color = new Color(data);
  // dynamic link
  $: href = `/color/${color.key}/${color.asArray.join(",")}`;
</script>

<div
  class="color-container"
  style="
    --color-instance-bg:{color.cssColorProperty};
    --color-instance-contrast: {color.contrast}">
    <h3>
      {color.key.toUpperCase()}
    </h3>
    <div class="actions">
      <Change
        title="Change model"
        handleClick={() => color.key = "NEXT"} />
      <Link {href} />
      <Copy />
    </div>
    <div class="values">
      {#each color.asArray as value}
        <span>{value}</span>
      {/each}
    </div>
</div>

<style>
  .color-container {
    --size: 100px;
    --icon-size: 1.2em;

    display: grid;
    grid-template: fit-content 1fr / 1fr var(--icon-size);
    grid-template-areas:
      "model values"
      "actions values";
    gap: 5px;

    width: var(--size);
    height: var(--size);
    padding: 0.75em;
    border-radius: 5px;
    background: var(--color-instance-bg, white);
    color: var(--color-instance-contrast, black);
    transition: background 0.2s linear;

    user-select: none;

    font-family: "Inconsolata", sans-serif;
    font-size: 14px;
  }

  .color-container:hover .actions {
    opacity: 1;
  } 

  .color-container :global(svg),
  .color-container :global(a) {
    width: var(--icon-size);
    height: var(--icon-size);
    fill: var(--color-instance-contrast, black);
    cursor: pointer;
  }

  .color-container :global(svg) {
    transition: transform 0.15s ease-in-out;
  }

  .color-container :global(svg):hover {
    transform: scale(1.1);
  }

  .color-container :global(svg):active {
    transform: scale(0.85);
  }

  h3 {
    grid-area: model;
    font-size: 1.25em;
  }

  .values {
    grid-area: values;

    display: inherit;
    gap: inherit;
    place-content: end end;
    place-items: end;
  }

  .actions {
    grid-area: actions;
    display: inherit;
    grid-template: 1fr 1fr / 1fr 1fr;
    row-gap: calc(0.35 * var(--icon-size));
    place-content: end start;

    width: 100%;

    opacity: 0;
    transition: opacity 0.2s linear;
  }

  
</style>