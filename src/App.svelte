<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "@/routes/Home.svelte";
  import NotFound from "@/routes/NotFound.svelte";
  import Venture from "@/routes/Venture.svelte";

  const routes = {
    "/": Home,
    "/venture": Venture,
    "*": NotFound,
  };
</script>

<main>
  <Router {routes} />
</main>
