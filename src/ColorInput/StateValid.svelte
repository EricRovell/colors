<script>
  import Section from "@components/Section.svelte";

  import Suggestions from "@components/Suggestions.svelte";
  import ColorModelValues from "@components/ColorModelValues.svelte";
  import ColorInfo from "@components/ColorInfo.svelte";
  import ColorPreview from "@components/ColorPreview.svelte";
  import ColorShades from "@components/ColorShades.svelte";
  import ColorTints from "@components/ColorTints.svelte";
  import ColorPalettes from "@components/ColorPalettes.svelte";
</script>

<div class="container">
  <div class="section-wrapper">
    <Suggestions />
  </div>
  <Section name="Information">
    <ColorInfo />
  </Section>
  <Section name="Convertion">
    <ColorModelValues />
  </Section>
  <Section name="Preview">
    <ColorPreview />
  </Section>
  <Section name="Shades">
    <ColorShades />
  </Section>
  <Section name="Tints">
    <ColorTints />
  </Section>
  <Section name="Palettes">
    <ColorPalettes />
  </Section>
</div>

<style>
  .container {
    display: grid;
    row-gap: 1.5em;
    width: 100%;
  }

  .section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
  }
</style>
