<script lang="ts">
  import { activeModal, userData } from "@/shared.svelte";
  import closeIcon from "@/assets/close.svg";
</script>

<div class="container">
  <div class="modal-background"></div>
  <div class="modal">
    <button class="btn-close" type="button" onclick={() => (activeModal.name = "")}>
      <img src={closeIcon} width={16} height={16} alt="Close button icon" />
    </button>
    <div>Challenges solved: {userData.solved}</div>
    <div>Knowledge points: {userData.knowledge.toLocaleString("ko-KR")} bytes</div>
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
  }

  .btn-close {
    position: absolute;
    padding: 0.3rem;
    top: 0.75rem;
    right: 0.75rem;
  }
</style>
