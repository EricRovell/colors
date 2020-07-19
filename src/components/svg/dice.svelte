<script>
  export let handleClick;
</script>

<svg
  viewBox="0 0 100 100"
  on:click={handleClick}
  xmlns="http://www.w3.org/2000/svg">
    <title>Dice</title>
    <path d="M88.66,0H11.34A11.33,11.33,0,0,0,0,11.33V88.66A11.34,11.34,0,0,0,11.34,100H88.66A11.34,11.34,0,0,0,100,88.66V11.33A11.33,11.33,0,0,0,88.66,0ZM25,85A10,10,0,1,1,35,75,10,10,0,0,1,25,85ZM50,60A10,10,0,1,1,60,50,10,10,0,0,1,50,60ZM75,35A10,10,0,1,1,85,25,10,10,0,0,1,75,35Z" transform="translate(0 0)"/>
</svg>

<style>
  svg {
    fill: var(--color-3);
    transition: transform 0.25s ease-in-out;
  }

  svg:active {
    transform: rotate(1turn);
  }
</style>
