<script>
  export let name;
</script>

<header id={`search-section-${name.toLowerCase()}`}>
  {name}
</header>
<section>
  <slot>
    This section is empty...
  </slot>
</section>

<style>
  header {
    font-size: 1.25em;
  }
  section {
    width: 100%;
    padding: 2em;
    border-radius: 5px;
    background: var(--card-bg, white);
    filter: drop-shadow(1px 1px 5px rgb(0 0 0 / 0.1));
  }
</style>