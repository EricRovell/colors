<script>
  import { fade } from "svelte/transition";
</script>

<div
  class="container"
  out:fade="{{ duration: 300 }}"
  in:fade="{{ delay: 300, duration: 300 }}">
  <slot />
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>

