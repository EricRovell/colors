<script>
  export let name;
</script>

<article>
  <header id={`search-section-${name.toLowerCase()}`}>
    {name[0].toUpperCase() + name.slice(1)}
  </header>
  <section>
    <slot>
      This section is empty...
    </slot>
  </section>
</article>

<style>
  article {
    width: 100%;
  }

  header {
    font-size: 1.25em;
    margin-bottom: 0.5em;
  }
  section {
    width: 100%;
    padding: 2em;
    border-radius: 5px;
    background: var(--card-bg, white);
    filter: drop-shadow(1px 1px 5px rgb(0 0 0 / 0.1));
  }

  @media screen and (max-width: 720px) {
    section {
      padding: 1em;
    }
  }
</style>