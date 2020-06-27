<script>
  import ColorInput from "./ColorInput/ColorInput.svelte";

	//export let name;
</script>

<main>
	<h1>Colours</h1>
	<div id="app">
    <ColorInput />
  </div>
</main>

<style>
  :global(:root *) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

  #app {
    display: grid;
    place-items: center;
    row-gap: 1.25em;
  }

	h1 {
		color: #ff3e00;
    font-family: "Annie Use Your Telescope";
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>