<script>
  import Logo from "@components/svg/Logo.svelte";
</script>

<header>
  <Logo />
  <h1>Color Wind</h1>
</header>

<style>
  header {
    display: grid;
    place-items: center start;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    column-gap: 0.25em;

    width: 100%;
    padding: 0.25em 0;

    position: sticky;
    top: 0;
  }

  header :global(svg) {
    width: 2em;
    height: 2em;
  }

  header:hover :global(svg .petals) {
    animation-play-state: running;
  }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 200;
	}
</style>