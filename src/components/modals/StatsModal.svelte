<script>
  import closeIcon from "../../assets/test.svg";

  const { toggleModal } = $props();
</script>

<div class="container">
  <div class="modal-background"></div>
  <div class="modal">
    <button class="btn-close" type="button" onclick={toggleModal}>
      <img src={closeIcon} width={36} height={36} alt="Stats menu icon" />
    </button>
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
    padding: 1.5rem;
    border-radius: 0.75rem;
    z-index: 10;
    color: #525050;
    background-color: #f9f9f9;
  }

  .btn-close {
    cursor: pointer;
  }
</style>
