<script>
  export let value = 0;
  //export let max = 100;
  export let progress = 0;
  export let percent = false;
</script>

<style>
  svg {
    width: 75px;
    height: 75px;
  }
</style>

<svg viewBox="0 0 36 36">
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
    stroke="#4CC790"
    stroke-width="2.8"
    stroke-linecap="round"
    stroke-dasharray={`${progress}, 100`}
  />
  <!-- value -->
  <text x="18" y="20.35" fill="#666" font-size="0.5em" text-anchor="middle">
    {value}{percent ? "%" : ""}
  </text>
</svg>