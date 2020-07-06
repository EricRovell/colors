<script>
  import Router from "svelte-spa-router";
  import routes from "@routes/routes.js";
</script>

<body>
  <Router {routes} />
</body>

<style>
  /* @import "@styles/themes.css"; */

  :root {
    --bg: #eee9e9;
  }
</style>