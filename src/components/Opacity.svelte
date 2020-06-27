<script>
  export let opacity = null;
  export let model = null;
</script>

<!-- Opaque -->
{#if !opacity}
  <div>Opaque</div>
<!-- HEX -->
{:else if model.toLowerCase() === "hex"}
  <div>
    <span>Opacity:</span>
    <span>
      {`${(opacity.length === 2)
        ? Math.round(parseInt(opacity, 16) * 100 / 255)
        : Math.round(parseInt(opacity, 16) * 100 / 16)
      }%`}
    </span>
  </div>
<!-- % -->
{:else if opacity.endsWith("%")}
  <div>
    <span>Opacity:</span>
    <span>{opacity}</span>
  </div>
<!-- decimal value -->
{:else}
  <div>
    <span>Opacity:</span>
    <span>{`${Number(opacity) * 100}%`}</span>
  </div>
{/if}

