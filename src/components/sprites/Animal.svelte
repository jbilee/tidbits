<script lang="ts">
  const { sprite } = $props();
</script>

<div class="outer"><div class="inner">{sprite}</div></div>

<style>
  .outer {
    --start-vector-x: 0;
    --start-vector-y: 0;
    --end-vector-x: 0;
    --end-vector-y: 0;
    position: relative;
    left: var(--start-vector-x);
    top: var(--start-vector-y);
  }

  @keyframes -global-move {
    from {
      left: var(--start-vector-x);
      top: var(--start-vector-y);
    }
    to {
      left: var(--end-vector-x);
      top: var(--end-vector-y);
    }
  }

  @keyframes -global-bounce {
    from {
      transform: translateY(-4px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
