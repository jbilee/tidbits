<script lang="ts">
  import { getDownloadableData, getLoadedData } from "@/utils/file";
  import { activeModal, replaceData, saveData, userData } from "@/shared.svelte";
  import closeIcon from "@/assets/close.svg";
  import type { UserData } from "@/shared.svelte";

  const handleLoad = () => {
    const handleData = (data: string) => {
      try {
        const parsedData: UserData = JSON.parse(data);
        replaceData(parsedData);
        saveData();
      } catch (e) {
        alert("Invalid file format.");
      }
    };

    getLoadedData(handleData);
  };
</script>

<div class="container">
  <div class="modal-background"></div>
  <div class="modal">
    <button class="btn-close" type="button" onclick={() => (activeModal.name = "")}>
      <img src={closeIcon} width={16} height={16} alt="Close button icon" />
    </button>
    <div>Pixel style: {userData.pixelStyle}</div>
    <div>Ambience: {userData.ambience}</div>
    <div>
      <input type="file" id="uploader" accept="text/*" style="display:none" onchange={() => handleLoad()} />
      <button onclick={() => document.getElementById("uploader")?.click()}>Load from back-up file</button>
    </div>
    <div><a href={getDownloadableData(userData)} download="tidbits.txt">Download back-up file</a></div>
    <div>Share</div>
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
