<script>
  import navRoutes from "@routes/navigation-routes.js";

  import Logo from "@components/svg/Logo.svelte";
  import ThemeToggle from "@components/ThemeToggle.svelte";
</script>

<div class="header-wrapper">
  <header>
    <div class="logo">
      <Logo />
      <h1>Color Wind</h1>
    </div>
    <nav>
      <ol>
        {#each navRoutes as { label, href }}
          <li>
            <a {href}>{label}</a>
          </li>
        {/each}
      </ol>
    </nav>
    <div class="controls">
      <ThemeToggle />
    </div>
  </header>
</div>

<style>
  .header-wrapper {
    width: 100%;
    height: calc(50px + 20vh);
  }
  header {
    height: 50px;
    padding: 0.25em 2em;
    border-bottom: 1px solid rgb(0 0 0 / 0.05);

    display: grid;
    grid-template: 1fr / auto 1fr auto auto;
    grid-template-areas: "logo . navigation controls";
    place-items: center start;
    column-gap: 1.25em;

    position: sticky;
    top: 0;
  }

  header :global(.logo svg) {
    width: 2em;
    height: 2em;
  }

  header:hover :global(svg .petals) {
    animation-play-state: running;
  }

  .logo {
    grid-area: logo;

    display: grid;
    grid-auto-flow: column;
    place-items: center;
    column-gap: 0.25em;
  }

	h1 {
		color: #ff3e00;
		text-transform: lowercase;
    font-family: "Annie Use Your Telescope";
		font-size: 2em;
		font-weight: 200;
    user-select: none;
	}

  nav {
    grid-area: navigation;
  }

  nav ol {
    display: grid;
    grid-auto-flow: column;
    column-gap: 0.35em;
  }

  nav a {
    color: black;
    text-transform: lowercase;
  }

  .controls {
    grid-area: controls;
  }
</style>