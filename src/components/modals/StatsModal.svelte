<script>
  import closeIcon from "../../assets/close.svg";

  const { toggleModal } = $props();
</script>

<div class="container">
  <div class="modal-background"></div>
  <div class="modal">
    <button class="btn-close" type="button" onclick={toggleModal}>
      <img src={closeIcon} width={16} height={16} alt="Close button icon" />
    </button>
    <div>Challenges solved:</div>
    <div>Knowledge points: bytes</div>
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
    top: 0;
    right: 0;
  }
</style>
