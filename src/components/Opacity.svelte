<script>
  import Ghost from "@components/svg/Ghost.svelte";

  export let opacity = null;
</script>

<style>
  .opacity-value {
    display: grid;
    grid-template: 1fr / 1fr;
    place-items: stretch;

    width: 75px;
    height: 75px;
    border-radius: 20%;
  }
  .opacity-value > div {
    background: pink;
    grid-row: 1;
    grid-column: 1;
  }

  .opacity-value > div:first-of-type {
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }

  .opacity-value > div:nth-of-type(2) {
    clip-path: polygon(100% 0, 0% 100%, 0 0);
  }

  .transparent {
    display: grid;
    place-items: center;
    row-gap: 5px;
  } 
</style>

{#if opacity === 0}
  <div class="transparent">
    <span>Transparent</span>
    <Ghost />
  </div>
{:else if !opacity || opacity === 1}
  <div>
    <span>Opaque</span>
  </div>
{:else}
  <div class="opacity-value">
    <div style={`opacity:${opacity}`} />
    <div />
  </div>
{/if}

<!-- {(opacity * 100).toFixed(0)}% -->
