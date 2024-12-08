<script lang="ts">
  import SettingsModal from "@/components/modals/SettingsModal.svelte";
  import cogIcon from "@/assets/cog.svg";

  let isShowing: boolean = $state(false);

  const toggleModal = () => {
    isShowing = !isShowing;
  };
</script>

<button class="icon-button" type="button" onclick={toggleModal}>
  <img src={cogIcon} width={36} height={36} alt="Settings menu icon" class="button-svg" />
  Settings
</button>
{#if isShowing}
  <SettingsModal {toggleModal} />
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
