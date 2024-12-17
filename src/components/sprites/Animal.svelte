<script lang="ts">
  const { sprite, xMultiplier, yMultiplier, xOffset = 0, yOffset = 0 } = $props();
  const getRandomValue = (range: number, offset = 0, magnitude = 0) => {
    return Math.floor((Math.random() + magnitude) * range) + offset;
  };

  const getRandomVector = () => {
    return {
      x: getRandomValue(xMultiplier, xOffset),
      y: getRandomValue(yMultiplier, yOffset),
    };
  };

  const initVector = (elem: HTMLElement) => {
    const randomVector = getRandomVector();
    elem.style.setProperty("--start-vector-x", randomVector.x + "px");
    elem.style.setProperty("--start-vector-y", randomVector.y + "px");
  };

  const setVector = (elem: HTMLElement) => {
    const randomVector = getRandomVector();
    elem.style.setProperty("--end-vector-x", randomVector.x + "px");
    elem.style.setProperty("--end-vector-y", randomVector.y + "px");
  };

  const resetVector = (elem: HTMLElement) => {
    const startX = elem.style.getPropertyValue("--end-vector-x");
    const startY = elem.style.getPropertyValue("--end-vector-y");
    elem.style.setProperty("--start-vector-x", startX);
    elem.style.setProperty("--start-vector-y", startY);
  };

  window.onload = () => {
    const outerElem: HTMLDivElement | null = document.querySelector(".outer");
    const innerElem: HTMLDivElement | null = document.querySelector(".inner");
    if (!outerElem || !innerElem) return;

    initVector(outerElem);
    outerElem.style.setProperty("--end-vector-x", 100 + "px");
    outerElem.style.setProperty("--end-vector-y", 0 + "px");
    outerElem.style.animation = "move 5s forwards linear";
    innerElem.style.animation = "bounce 150ms infinite alternate linear";

    outerElem.addEventListener("animationend", () => {
      resetVector(outerElem);
      outerElem.style.animation = "none";
      innerElem.style.animation = "none";

      setTimeout(() => {
        setVector(outerElem);
        outerElem.style.animation = "move 5s forwards linear";
        innerElem.style.animation = "bounce 150ms infinite alternate linear";
      }, 2000);
    });
  };
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
      transform: translateY(-3px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
