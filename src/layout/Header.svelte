<script>
  import navRoutes from "@routes/navigation-routes.js";
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active"; 

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
            <a {href} use:active use:link>
              {label}
            </a>
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
    border-bottom: 1px solid var(--color-3-35);

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
		color: var(--color-3);
		text-transform: lowercase;
    font-family: "Annie Use Your Telescope";
		font-size: 2em;
		font-weight: 200;
    user-select: none;
  }

  nav {
    grid-area: navigation;
    height: 100%;
  }

  nav ol {
    display: grid;
    grid-auto-flow: column;
    column-gap: 1em;
  }

  nav ol,
  nav li,
  nav a {
    height: 100%;
  }

  a {
    position: relative;

    color: var(--color-gray-500);
    text-transform: lowercase;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:hover {
    color: var(--color-gray-1000) !important;
  }

  a:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--color-3-35);
  }

  :global(nav a.active) {
    color: var(--color-gray-1000) !important;
  }

  :global(nav a.active::after) {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--color-3);
  }

  .controls {
    grid-area: controls;
  }


  @media screen and (max-width: 520px) {

    .header-wrapper {
      width: 100%;
      height: calc(50px + 10vh);
    }

    header {
      height: 50px;
      padding: 0.25em 1em;
    }

    .logo h1 {
      display: none;
    }

  }
</style>