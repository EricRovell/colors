<script>
  import Section from "@components/Section.svelte";

  import Suggestions from "@components/Suggestions.svelte";
  import ColorModelValues from "@components/ColorModelValues.svelte";
  import ColorInfo from "@components/ColorInfo.svelte";
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
</div>

<style>
  .container {
    display: grid;
    row-gap: 1em;
    width: 100%;
  }

  .section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
  }
</style>
