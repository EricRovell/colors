<script>
  export let opacity = null;
</script>

<style>
  .block {
    width: 75px;
    height: 75px;
    background: red;
    border-radius: 25%;
    filter: drop-shadow(0px 0px 5px rgb(0 0 0 / 0.95));
  }
</style>

<div>
  <!-- Opaque -->
  {#if opacity === 0}
    <div>Transparent</div>
  {:else if !opacity || opacity === 1}
    <div>Opaque</div>
  {:else}
    <div>{(opacity * 100).toFixed(0)}%</div>
  {/if}
    <div class="block" style={`opacity:${opacity}`} />
</div>


