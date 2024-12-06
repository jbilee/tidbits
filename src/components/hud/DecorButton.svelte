<script lang="ts">
  import decorIcon from "../../assets/decor.svg";
</script>

<button class="icon-button" type="button">
  <img src={decorIcon} width={36} height={36} alt="Decor menu icon" />
  Decor
</button>

<style>
  .icon-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
  }
</style>
