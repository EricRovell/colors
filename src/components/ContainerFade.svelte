<script>
  import { fade } from "svelte/transition";
</script>

<div
  out:fade="{{ duration: 300 }}"
  in:fade="{{ delay: 300, duration: 300 }}">
  <slot />
</div>
