<script>
  import Moon from "@components/svg/Moon.svelte";

  let theme = "light";
  $: href = `themes/${theme}.css`;

  const handleSwitch = () => {
    theme = (theme === "light")
      ? "dark"
      : "light";
  }
</script>

<svelte:head>
  <link rel="stylesheet" {href}>
</svelte:head>

<div on:click={handleSwitch}>
  <Moon />
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }

  div :global(svg) {
    width: 1.5em;
    height: 1.5em;
  }
</style>