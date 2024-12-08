<script lang="ts">
  import DecorButton from "@/components/hud/DecorButton.svelte";
  import PlayerStatsButton from "@/components/hud/PlayerStatsButton.svelte";
  import SettingsButton from "@/components/hud/SettingsButton.svelte";
</script>

<div class="hud-item">
  <PlayerStatsButton />
  <DecorButton />
  <SettingsButton />
</div>

<style>
  .hud-item {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
</style>
