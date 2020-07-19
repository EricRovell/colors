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
    max-width: var(--max-width, 640px);
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 520px) {
    div {
      padding: 0 1em;
    }
  }
</style>
