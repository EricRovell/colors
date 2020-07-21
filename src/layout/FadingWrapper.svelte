<script>
  import { fade } from "svelte/transition";
</script>

<div in:fade="{{ duration: 500 }}">
  <slot />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    max-width: var(--max-width);
    display: flex;
    justify-content: center;
  }
</style>
