<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="26.08" y="39.58" width="2.84" height="67.87" transform="translate(57.54 0.6) rotate(45)" style="fill: #b789a1"/>
  <g class="petals">
    <g>
      <polygon points="28.94 16.37 28.94 32.74 48.58 32.74 48.58 0 28.94 16.37" style="fill: #00b4e5"/>
      <polygon points="48.58 32.67 48.58 49.04 28.94 49.04 28.94 16.3 48.58 32.67" style="fill: #00d8ff"/>
    </g>
    <g>
      <polygon points="78.63 29.39 62.26 29.39 62.26 49.04 95 49.04 78.63 29.39" style="fill: #ff9e56"/>
      <polygon points="62.33 49.04 45.96 49.04 45.96 29.39 78.7 29.39 62.33 49.04" style="fill: #ffd34b"/>
      <g>
        <polygon points="68.22 79.09 68.22 62.72 48.58 62.72 48.58 95.46 68.22 79.09" style="fill: #d5284b"/>
        <polygon points="48.58 62.79 48.58 46.42 68.22 46.42 68.22 79.16 48.58 62.79" style="fill: #ff4362"/>
      </g>
    </g>
    <g>
      <polygon points="18.53 68.68 34.9 68.68 34.9 49.04 2.16 49.04 18.53 68.68" style="fill: #2dd58f"/>
      <polygon points="34.83 49.04 51.2 49.04 51.2 68.68 18.46 68.68 34.83 49.04" style="fill: #b6ed60"/>
    </g>
  </g>
  <g>
    <circle cx="49.24" cy="48.38" r="4.58" style="fill: #b789a1"/>
    <path d="M56.32,49.81a4.57,4.57,0,0,1-4.58,4.58,4.53,4.53,0,0,1-3.45-1.58,4.29,4.29,0,0,0,1,.12,4.58,4.58,0,0,0,4.58-4.59,4.47,4.47,0,0,0-1.14-3A4.56,4.56,0,0,1,56.32,49.81Z" transform="translate(-2.5 -1.48)" style="fill: #985e7c"/>
    <circle cx="47.13" cy="47.34" r="0.8" style="fill: #fff"/>
  </g>
</svg>

<style>
  .petals {
    animation: petals-rotate 1.5s linear infinite;
    animation-play-state: paused;
    transform-origin: 50% 50%;
  }

  .petals:hover {
    animation-play-state: running;
  }

  @keyframes petals-rotate {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(1turn);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(2turn);
    }
  }
</style>