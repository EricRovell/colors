<script>
  import { color } from "@stores/colorStore.js";

  $: css = $color.cssColorProperty;
  $: contrast = $color.contrast;
</script>

<div class="container">
  <!-- preview text color -->
  <section>
    <p
      contenteditable="true"
      class="preview-text"
      style="color: {css}; background: {contrast}">
      This is example of text color
    </p>
  <!-- preview backgound color -->
  </section>
  <section>
    <p
      contenteditable="true"
      class="preview-background"
      style="background: {css}; color: {contrast}">
      This is example of background color
    </p>
  </section>
  <!-- preview border color -->
  <section>
    <p
      contenteditable="true"
      class="preview-border"
      style="border: 2px solid {css}">
      This is example of border color
    </p>
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