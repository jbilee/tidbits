<script>
  import MenuBar from "@/components/hud/MenuBar.svelte";
  import VentureButton from "@/components/hud/VentureButton.svelte";
</script>

<div class="container">
  <MenuBar />
  <VentureButton />
</div>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
