<script lang="ts">
  import SettingsModal from "@/components/modals/SettingsModal.svelte";
  import { activeModal } from "@/shared.svelte";
  import cogIcon from "@/assets/cog.svg";
</script>

<button
  class="hud-button icon-button"
  type="button"
  onclick={() => (activeModal.name = "settings")}
  tabindex={activeModal.name === "" ? 3 : -1}
>
  <img src={cogIcon} width={36} height={36} alt="Settings menu icon" class="button-svg" />
  Settings
</button>
{#if activeModal.name === "settings"}
  <SettingsModal />
{/if}

<style>
  .icon-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.75rem;
  }
</style>
