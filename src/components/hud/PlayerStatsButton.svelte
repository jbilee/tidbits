<script lang="ts">
  import chartIcon from "../../assets/chart.svg";
</script>

<button class="icon-button" type="button">
  <img src={chartIcon} width={36} height={36} alt="Stats menu icon" />
  Stats
</button>

<style>
  .icon-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.75rem;
  }
</style>
