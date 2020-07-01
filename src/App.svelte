<script>
  import ColorInput from "./ColorInput/ColorInput.svelte";

	//export let name;
</script>

<main>
	<div id="app">
    <h1>Colours</h1>
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
		display: grid;
    justify-items: center;
    min-height: 100vh;
    height: 250vh;
    width: 100vw;

    font-family: "Annie Use Your Telescope";
	}

  #app {
    display: grid;
    place-items: center;
    grid-auto-rows: min-content;
    row-gap: 1.25em;

    position: relative;

    margin-top: 4em;
    width: 100%;
    max-width: 640px;
  }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 5em;
		font-weight: 200;
	}

	@media (max-width: 640px) {
		#app {
			max-width: none;
      padding: 1.5em;
		}
	}
</style>