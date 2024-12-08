<script lang="ts">
  import decorIcon from "@/assets/decor.svg";
  import DecorModal from "@/components/modals/DecorModal.svelte";

  let isShowing: boolean = $state(false);

  const toggleModal = () => {
    isShowing = !isShowing;
  };
</script>

<button class="icon-button" type="button" onclick={toggleModal}>
  <img src={decorIcon} width={36} height={36} alt="Decor menu icon" class="button-svg" />
  Decor
</button>
{#if isShowing}
  <DecorModal {toggleModal} />
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
