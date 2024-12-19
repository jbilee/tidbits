<script lang="ts">
  import { push } from "svelte-spa-router";
  import scholarIcon from "@/assets/scholar.svg";
</script>

<div class="greeting">
  <img src={scholarIcon} width={64} height={64} alt="Scholar's hat" class="button-svg" />
  <p>Good day to you, curious adventurer!</p>
  <p>Ready to tackle some questions?</p>
</div>
<div class="menu">
  <button class="hud-button"><span class="ko text-lg">운영체제</span><br />0/0</button>
  <button class="hud-button" onclick={() => push("/venture/computer-networks")}>
    <span class="ko text-lg">네트워크</span><br />0/0
  </button>
  <button class="hud-button"><span class="ko text-lg">데이터베이스</span><br />0/0</button>
  <button class="hud-button"><span class="text-lg">JavaScript</span><br />0/0</button>
</div>

<style>
  .greeting {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }

  img {
    margin-bottom: 1rem;
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 1rem;
  }

  .text-lg {
    font-size: 1.5rem;
  }
</style>
