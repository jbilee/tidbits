<script lang="ts">
  import Router from "svelte-spa-router";
  import ComputerNetworks from "@/routes/ComputerNetworks.svelte";
  import Home from "@/routes/Home.svelte";
  import NotFound from "@/routes/NotFound.svelte";
  import Venture from "@/routes/Venture.svelte";

  const routes = {
    "/": Home,
    "/venture": Venture,
    "/venture/computer-networks": ComputerNetworks,
    "*": NotFound,
  };
</script>

<main>
  <Router {routes} />
</main>
