<script>
  import ColorInput from "../ColorInput/ColorInput.svelte";
  import Logo from "@components/svg/Logo.svelte";
</script>

<main>
	<div id="app">
    <h1 class="title">
      <Logo />
      <span>Color Wind</span>
    </h1>
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

    margin-top: 4em;
    width: 100%;
    max-width: 640px;
  }

  .title {
    display: grid;
    place-items: center;
    grid-auto-flow: column;
    column-gap: 0.25em;
  }

  .title :global(svg) {
    width: 0.75em;
    height: 0.75em;
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