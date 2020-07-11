<script>
  export let text = "value";
  export let progress = 0;
  export let color = "black";
</script>

<svg viewBox="0 0 36 36" style="--chart-progress:{progress}; --color:{color}">
  <!-- circle bg -->
  <path
    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    fill="none"
    stroke="#eee"
    stroke-width="3.8"
  />
  <!-- progress -->
  <path
    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    fill="none"
    stroke-width="2.8"
    stroke-linecap="round"
  />
  <!-- value -->
  <text x="18" y="20.35" fill="#666" font-size="0.5em" text-anchor="middle">
    {text}
  </text>
</svg>

<style>
  svg {
    width: 50px;
    height: 50px;
    transition: stroke-dasharray 0.15s linear;
    stroke-dasharray: var(--chart-progress, 0) 100;
  }

  svg path {
    stroke: var(--color, #4CC790);
  }
</style>
