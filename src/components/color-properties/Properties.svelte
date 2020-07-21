<script>
  // section wrapper
  import Section from "@components/Section.svelte";

  import General from "@components/color-properties/General.svelte";
  import Models from "@components/color-properties/Models.svelte";
  import Preview from "@components/color-properties/Preview.svelte";
  import Shades from "@components/color-properties/Shades.svelte";
  import Tints from "@components/color-properties/Tints.svelte";
  import Palettes from "@components/color-properties/Palettes.svelte";

  let sections = {
    "information": General,
    "models": Models,
    "preview": Preview,
    "shades": Shades,
    "tints": Tints,
    "palettes": Palettes,
  };
</script>

{#each Object.entries(sections) as [ section, Component ]}
  <Section name={section}>
    <Component />
  </Section>
{/each}
