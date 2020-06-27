<script>
  export let value = "";
  export let clearInput;
  $: visible = (value.length > 0);
</script>

<style>
  div {
    display: grid;
    grid-template: 50px / 1fr 20px;
    place-items: center;

    border-radius: 10px;
    border: 1px solid red;
    width: calc(50vw + 35px);
    overflow: hidden;
    padding: 0 0.75em;
  }

  div:focus-within {
    filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.25));
  }

  input[type=text] {
    background: none;
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    transition: transform 0.15s ease-out;
  }

  input:focus {
    outline: none;
    border: none;
  }

  svg {
    width: 20px;
    height: 20px;
    z-index: 2;
    cursor: pointer;
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }
</style>

<div>
  <input type="text" bind:value>
  <svg
    viewBox="0 0 512.001 512.001"
    class:hidden={!visible}
    on:click={clearInput}>
    <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"/>
  </svg>
</div>

