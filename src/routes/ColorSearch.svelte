<script>
  import Header from "@src/layout/Header.svelte";
  import ColorInput from "../ColorInput/ColorInput.svelte";
</script>

<main>
	<div id="app">
    <div id="header">
      <Header />
    </div>
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
    max-width: 100vw;

    font-family: "Annie Use Your Telescope";

    background: var(--bg);
	}

  #app {
    display: grid;
    place-items: center;
    grid-auto-rows: min-content;
    row-gap: 1.25em;

    position: relative;

    width: 100%;
    max-width: 640px;
  }

  #header {
    position: relative;
    width: 100%;
    height: 25vh;
  }

	@media (max-width: 640px) {
		#app {
			max-width: none;
      padding: 1.5em;
		}
	}
</style>