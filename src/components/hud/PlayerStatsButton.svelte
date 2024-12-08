<script lang="ts">
  import StatsModal from "@/components/modals/StatsModal.svelte";
  import chartIcon from "@/assets/chart.svg";

  let isShowing: boolean = $state(false);

  const toggleModal = () => {
    isShowing = !isShowing;
  };
</script>

<button class="hud-button icon-button" type="button" onclick={toggleModal}>
  <img src={chartIcon} width={36} height={36} alt="Stats menu icon" class="button-svg" />
  Stats
</button>
{#if isShowing}
  <StatsModal {toggleModal} />
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
