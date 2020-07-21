<script>
  import Heart from "@components/svg/Heart.svelte";
</script>

<footer>
  <div class="container">
    <span>
      Color Wind v.0.2
    </span>
    <div class="author">
      <span>Made with</span>
      <Heart />
      <a href="https://github.com/EricRovell">
        by Eric Rovell
      </a>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 0.75em 1.25em;
  }

  footer :global(svg) {
    width: 1em;
    height: 1em;
  }

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: var(--max-width, 640px);
    margin: auto;
  }

  .author {
    display: grid;
    grid-auto-flow: column;
    column-gap: 0.25em;
    place-items: center;
  }

  .author a {
    color: var(--color-3);
  }

  @media screen and (max-width: 720px) {
    footer {
      font-size: 0.65em;
    }
  }

</style>