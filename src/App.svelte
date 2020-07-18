<script>
  import Router from "svelte-spa-router";
  import routes from "@routes/routes.js";

  import LayoutMain from "@src/layout/LayoutMain.svelte";
</script>

<body>
  <LayoutMain>
    <Router {routes} />
  </LayoutMain>
</body>
