<script>
  import Header from "@src/layout/Header.svelte";
  import Footer from "@src/layout/Footer.svelte";
</script>

<main id="layout-main">
  <Header />
  <div class="content">
    <slot />
  </div>
  <Footer />
</main>

<style>
  #layout-main {
    width: 100%;
  }

  .content {
    display: grid;
    justify-items: center;
    width: 100%;
    min-height: 100vh;
  }

  @media screen and (max-width: 720px) {
    .content {
      padding: 0 0.5em;
    }
  }
</style>