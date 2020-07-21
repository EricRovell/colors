<script>
  export let color;
</script>

<div class="color" style="--color: {color.cssString};">
  <a href="hi">
    <span>{color.model}</span>
    <div>
      {#each color.asArray as value}
        <span>{value}</span>
      {/each}
    </div>
  </a>
</div>

<style>
  .color {
    --size: 100px;

    width: 100%;
    height: var(--size);

    background: var(--color);
    transition: background 0.15s linear;  
  }
</style>