<script lang="ts">
  import DecorButton from "./DecorButton.svelte";
  import PlayerStatsButton from "./PlayerStatsButton.svelte";
  import SettingsButton from "./SettingsButton.svelte";
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
