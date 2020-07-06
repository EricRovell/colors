<script>
  import Section from "@components/Section.svelte";
  import ColorModelValues from "@components/ColorModelValues.svelte";
  import ColorInfo from "@components/ColorInfo.svelte";
</script>


<div>
  <Section name="Information">
    <ColorInfo />
  </Section>
  <Section name="Convertion">
    <ColorModelValues />
  </Section>
</div>

<style>
  div {
    display: grid;
    row-gap: 1em;
  }
</style>
