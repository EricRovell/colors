<script>
  import { color } from "@stores/colorStore.js";

  $: css = $color.cssColorProperty;
  $: contrast = $color.contrast;

  let previewColor = "This text has some color";
  let previewBg = "This text has some color";
  let previewBorder = "This text has some color";
</script>

<div class="container">
  <!-- preview text color -->
  <section>
    <p class="preview-text" style="color: {css}; background: {contrast}">
      {previewColor}
    </p>
    <div>
      <input type="text" bind:value={previewColor}>
    </div>
  <!-- preview backgound color -->
  </section>
  <section>
    <p class="preview-background" style="background: {css}; color: {contrast}">
      {previewBg}
    </p>
    <div>
      <input type="text" bind:value={previewBg}>
    </div>
  </section>
  <!-- preview border color -->
  <section>
    <p class="preview-border" style="border: 2px solid {css}">
      {previewBorder}
    </p>
    <div>
      <input type="text" bind:value={previewBorder}>
    </div>
  </section>
</div>

<style>
  .container {
    display: grid;
    place-items: center;
    row-gap: 1.25em;

    font-family: "Inconsolata", sans-serif;
  }

  section {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    column-gap: 1em;
    place-items: stretch;
  }

  p,
  input {
    padding: 0.25em;
    width: 100%;
    height: 100%;
  }

  .preview-text,
  .preview-background {
    transition:
      color 0.35s linear,
      background 0.35s linear;
  }

  .preview-border {
    transition: border 0.35s linear;
  }
</style>