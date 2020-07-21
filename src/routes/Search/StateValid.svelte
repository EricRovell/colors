<script>
  import { fade } from "svelte/transition";

  import Suggestions from "@components/Suggestions.svelte";
  import Properties from "@components/color-properties/Properties.svelte";
</script>

<div class="container" in:fade="{{ duration: 500 }}">
  <div class="section-wrapper">
    <Suggestions />
  </div>
  <Properties />
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
    width: 100%;
  }
</style>
