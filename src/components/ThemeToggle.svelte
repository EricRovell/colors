<script>
  let toggle = false;
  $: href = `themes/${(toggle) ? "dark" : "light"}.css`;
</script>

<svelte:head>
  <link rel="stylesheet" {href}>
</svelte:head>

<div>
  <label>
    <input type="checkbox" bind:checked={toggle}>
    <!-- Moon -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path d="M96,67.57a47.64,47.64,0,0,1-19.77,4.26A48.12,48.12,0,0,1,28.16,23.77,47.32,47.32,0,0,1,32.42,4l1.82-4-4,1.8a51.38,51.38,0,1,0,68,68l1.8-4ZM75,90.48A48.06,48.06,0,1,1,27.73,6.78a50.67,50.67,0,0,0-2.88,17A51.43,51.43,0,0,0,76.23,75.14a50.92,50.92,0,0,0,17-2.88A48,48,0,0,1,75,90.48Z" style="fill: #fcd462"/>
    </svg>
    <!-- Sun -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="28.75" style="fill: #fcd462"/>
      <g>
        <path d="M63.63,24.63a47,47,0,0,1,2.25,12.62c.75,17.38-11,32.75-26.25,39.5a28.75,28.75,0,0,0,24-52.12Z" style="fill: #f6c358"/>
        <path d="M50,0a4.21,4.21,0,0,0-4.25,4.25v7a4.25,4.25,0,0,0,8.5,0v-7A4.21,4.21,0,0,0,50,0Z" style="fill: #f6c358"/>
        <path d="M50,84.5a4.21,4.21,0,0,0-4.25,4.25v7a4.25,4.25,0,0,0,8.5,0v-7A4.21,4.21,0,0,0,50,84.5Z" style="fill: #f6c358"/>
        <path d="M100,50a4.21,4.21,0,0,0-4.25-4.25h-7a4.25,4.25,0,0,0,0,8.5h7A4.21,4.21,0,0,0,100,50Z" style="fill: #f6c358"/>
        <path d="M15.5,50a4.21,4.21,0,0,0-4.25-4.25h-7a4.25,4.25,0,0,0,0,8.5h7A4.22,4.22,0,0,0,15.5,50Z" style="fill: #f6c358"/>
        <path d="M85.38,14.62a4.31,4.31,0,0,0-6,0l-5,5a4.24,4.24,0,0,0,6,6l5-5A4.31,4.31,0,0,0,85.38,14.62Z" style="fill: #f6c358"/>
        <path d="M25.62,74.37a4.31,4.31,0,0,0-6,0l-5,5a4.24,4.24,0,0,0,6,6l5-5A4.29,4.29,0,0,0,25.62,74.37Z" style="fill: #f6c358"/>
        <path d="M85.38,85.37a4.31,4.31,0,0,0,0-6l-5-5a4.24,4.24,0,0,0-6,6l5,5A4.29,4.29,0,0,0,85.38,85.37Z" style="fill: #f6c358"/>
        <path d="M25.62,25.62a4.29,4.29,0,0,0,0-6l-5-5a4.24,4.24,0,0,0-6,6l5,5A4.29,4.29,0,0,0,25.62,25.62Z" style="fill: #f6c358"/>
      </g>
    </svg>
    <!-- Toggle -->
    <span />
  </label>
</div>

<style>
  label {
    --size: 1em;

    position: relative;

    background: rgb(18 21 31);

    display: grid;
    grid-template: var(--size) / var(--size) var(--size);
    column-gap: calc(0.5 * var(--size));
    border: 1px solid rgb(0 0 0 / 0.25);
    border-radius: calc(1.1 * var(--size));
    padding: calc(0.25 * var(--size)) calc(0.45 * var(--size));
    cursor: pointer;
  }

  svg {
    width: var(--size);
    height: var(--size);
    fill: yellow;
  }

  span {
    position: absolute;
    top: calc(0.2 * var(--size));
    left: calc(0.45 * var(--size));

    background: #d1d1d1;

    width: calc(1.1 * var(--size));
    height: calc(1.1 * var(--size));
    border-radius: 50%;

    transition: left 0.2s ease-in-out;
  }

  input {
    display: none;
  }

  input:checked ~ span {
    left: calc(2 * var(--size));
  }
</style>