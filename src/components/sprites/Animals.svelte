<script lang="ts">
  import Animal from "@/components/sprites/Animal.svelte";
  import { getRandomValue } from "@/utils/math";

  type VectorType = "start" | "end";

  // TODO: Replace with actual data
  const animals = [
    { sprite: "옷", id: 1 },
    { sprite: "옷", id: 2 },
    { sprite: "옷", id: 3 },
    { sprite: "옷", id: 4 },
    { sprite: "옷", id: 5 },
  ];

  // TODO: Replace with unique values for each sprite
  const X_MULTIPLIER = 50;
  const Y_MULTIPLIER = 10;
  const X_OFFSET = 100;
  const Y_OFFSET = 40;

  const getRandomVector = () => {
    return {
      x: getRandomValue(X_MULTIPLIER, X_OFFSET),
      y: getRandomValue(Y_MULTIPLIER, Y_OFFSET),
    };
  };

  const setRandomVector = (type: VectorType, elem: HTMLElement) => {
    const randomVector = getRandomVector();
    elem.style.setProperty(`--${type}-vector-x`, randomVector.x + "px");
    elem.style.setProperty(`--${type}-vector-y`, randomVector.y + "px");
  };

  const updateStartVector = (elem: HTMLElement) => {
    const startX = elem.style.getPropertyValue("--end-vector-x");
    const startY = elem.style.getPropertyValue("--end-vector-y");
    elem.style.setProperty("--start-vector-x", startX);
    elem.style.setProperty("--start-vector-y", startY);
  };

  window.onload = () => {
    const parentElem: HTMLElement | null = document.getElementById("animals");
    if (!parentElem) return;

    for (const child of parentElem.children) {
      if (!child || !child.firstElementChild) return;
      const outerElem = child as HTMLElement;
      const innerElem = child.firstElementChild as HTMLElement;

      setRandomVector("start", outerElem);
      setRandomVector("end", outerElem);
      outerElem.style.animation = `move ${getRandomValue(3, 1)}s forwards linear`;
      innerElem.style.animation = "bounce 150ms infinite alternate linear";

      outerElem.addEventListener("animationend", () => {
        updateStartVector(outerElem);
        outerElem.style.animation = "none";
        innerElem.style.animation = "none";

        setTimeout(
          () => {
            setRandomVector("end", outerElem);
            outerElem.style.animation = `move ${getRandomValue(3, 1)}s forwards linear`;
            innerElem.style.animation = "bounce 150ms infinite alternate linear";
          },
          getRandomValue(10, 0, 100)
        );
      });
    }
  };
</script>

<main>
  <div id="animals">
    {#each animals as animal (animal.id)}
      <Animal sprite={animal.sprite} />
    {/each}
  </div>
</main>

<style>
  /* TODO: Randomize absolute positions of sprites */
</style>
