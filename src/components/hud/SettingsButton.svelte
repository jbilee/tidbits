<script lang="ts">
  import cogIcon from "../../assets/cog.svg";
</script>

<button class="icon-button" type="button">
  <img src={cogIcon} width={36} height={36} alt="Settings menu icon" />
  Settings
</button>

<style>
  .icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.75rem;
  }
</style>
