<script lang="ts">
  import { push } from "svelte-spa-router";
  import { activeModal } from "@/shared.svelte";
</script>

<button
  class="hud-item hud-button text-large"
  type="button"
  title="Knowledge awaits!"
  onclick={() => push("/venture")}
  tabindex={activeModal.name === "" ? 4 : -1}
>
  Venture
</button>

<style>
  .hud-item {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
</style>
