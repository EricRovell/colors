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
    class="progress"
  />
  <!-- value -->
  <text x="18" y="20.35" fill="#666" text-anchor="middle" dominant-baseline="middle">
    {text}
  </text>
</svg>

<style>
  svg {
    width: var(--size, 50px);
    height: var(--size, 50px);
  }

  svg .progress {
    stroke: var(--color, #4CC790);
    stroke-dasharray: var(--chart-progress, 0) 100;
    transition: stroke-dasharray 0.15s linear;
  }

  svg text {
    font-size: 0.75em;
  }
</style>
