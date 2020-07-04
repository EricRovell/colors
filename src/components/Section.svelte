<script>
  export let model;
</script>

<div class="section-colors">
  <div>
    <span>rgb</span>
    <div>{model.rgb.r}</div>
    <div>{model.rgb.g}</div>
    <div>{model.rgb.b}</div>
  </div>
  <div>
    <span>hex</span>
    <div>{model.hex.r}</div>
    <div>{model.hex.g}</div>
    <div>{model.hex.b}</div>
  </div>
  <div>
    <span>hsl</span>
    <div>{model.hsl.h}</div>
    <div>{model.hsl.s}</div>
    <div>{model.hsl.l}</div>
  </div>
  <div>
    <span>hsv</span>
    <div>{model.hsv.h}</div>
    <div>{model.hsv.s}</div>
    <div>{model.hsv.v}</div>
  </div>
  <div>
    <span>cmyk</span>
    <div>{model.cmyk.c}</div>
    <div>{model.cmyk.m}</div>
    <div>{model.cmyk.y}</div>
    <div>{model.cmyk.k}</div>
  </div>
</div>

<style>
  .section-colors {
    display: grid;
    row-gap: 15px;
  }

  .section-colors > div {
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
  }
</style>