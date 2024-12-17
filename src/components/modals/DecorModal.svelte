<script lang="ts">
  import { activeModal, saveData, userData } from "@/shared.svelte";
  import closeIcon from "@/assets/close.svg";
  import { decors } from "@/assets/decors";

  const buyDecor = (name: string, cost: number) => {
    userData.decorsUnlocked.push(name);
    userData.knowledge -= cost;
    saveData();
  };

  const placeDecor = (name: string) => {
    userData.decorsPlaced.push(name);
    saveData();
  };

  // TODO
  const removeDecor = () => {};
</script>

<div class="container">
  <div class="modal-background"></div>
  <div class="modal">
    <button class="btn-close" type="button" onclick={() => (activeModal.name = "")}>
      <img src={closeIcon} width={16} height={16} alt="Close button icon" />
    </button>
    <ul class="stock-list">
      {#each decors as decor (decor.id)}
        <li class="stock-item">
          <img src={closeIcon} width={75} height={75} alt="{decor.name} decor" title="{decor.name} decor" />
          <div>
            <p>[{decor.name}]</p>
            <p>Cost: {decor.cost} bytes</p>
            <p>
              {#if userData.decorsPlaced.includes(decor.name)}
                <button class="btn-buy" type="button" onclick={removeDecor}>Remove</button>
              {:else if userData.decorsUnlocked.includes(decor.name)}
                <button class="btn-buy" type="button" onclick={() => placeDecor(decor.name)}>Place</button>
              {:else}
                <button
                  class="btn-buy"
                  type="button"
                  onclick={() => buyDecor(decor.name, decor.cost)}
                  disabled={userData.knowledge < decor.cost}
                >
                  Buy
                </button>
              {/if}
            </p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: grid;
    place-content: center;
  }

  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.75;
  }

  .modal {
    position: relative;
    padding: 3rem;
    border-radius: 0.75rem;
    z-index: 10;
    color: #525050;
    background-color: #f9f9f9;
    max-height: 500px;
    overflow: hidden;
  }

  .btn-close {
    position: absolute;
    padding: 0.3rem;
    top: 0.75rem;
    right: 0.75rem;
  }

  .stock-list {
    max-height: 100%;
    padding-right: 1rem;
    overflow: auto;
    scrollbar-gutter: stable;
  }

  .stock-item {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  .stock-item:last-of-type {
    margin: 0;
  }

  .btn-buy {
    padding: 0.25rem 0.75rem;
    width: 6rem;
    color: var(--base-text-dark);
    background-color: var(--base-background-dark);
  }
  .btn-buy:disabled {
    cursor: default;
    opacity: 0.5;
  }
</style>
