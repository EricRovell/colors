<script>
  export let visible;
  export let actionClick;
</script>

<style>
  svg {
    transform: scale(1);
    transition: 
      opacity 0.25s ease-in-out,
      transform 0.25s ease-in-out;
  }

  .hidden {
    opacity: 0;
    transform: scale(0) rotate(90deg);
    pointer-events: none;
  }
</style>

<svg
  viewBox="0 0 100 100"
  class:hidden={!visible}
  on:click={actionClick}>
  <path d="M2.5,99.21.86,97.57A1.12,1.12,0,0,1,.86,96L95.33,1.5a1.14,1.14,0,0,1,1.59,0l1.64,1.64a1.12,1.12,0,0,1,0,1.59L4.09,99.21A1.14,1.14,0,0,1,2.5,99.21Z" />
  <path d="M98.56,97.57l-1.64,1.64a1.14,1.14,0,0,1-1.59,0L.86,4.73a1.12,1.12,0,0,1,0-1.59L2.5,1.5a1.14,1.14,0,0,1,1.59,0L98.56,96A1.12,1.12,0,0,1,98.56,97.57Z" />
</svg>
