<script lang="ts">
  import DecorModal from "@/components/modals/DecorModal.svelte";
  import { activeModal } from "@/shared.svelte";
  import decorIcon from "@/assets/decor.svg";
</script>

<button
  class="hud-button icon-button"
  type="button"
  onclick={() => (activeModal.name = "decor")}
  tabindex={activeModal.name === "" ? 2 : -1}
>
  <img src={decorIcon} width={36} height={36} alt="Decor menu icon" class="button-svg" />
  Decor
</button>
{#if activeModal.name === "decor"}
  <DecorModal />
{/if}

<style>
  .icon-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
  }
</style>
