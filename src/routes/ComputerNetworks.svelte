<script lang="ts">
  import { userData } from "@/shared.svelte";
  import { shuffle } from "@/utils/math";
  import { networks } from "@/assets/questions/networks";

  const [userAnswers] = userData.solved.categories.filter((category) => category.name === "networks");
  const shuffledQuestions = shuffle(networks);

  let index = $state(0);
  let answered = $state(false);
  let userChoice = $state<null | number>(null);
  let currentQuestion = $derived(shuffledQuestions[index]);

  const handleChoice = (choice: { text: string; isAnswer: boolean }, index: number) => {
    answered = true;
    userChoice = index;
    if (choice.isAnswer) {
    } else {
    }
  };
</script>

<div class="ko container">
  <h2>네트워크</h2>
  <div class="card">
    <div class="question">
      {currentQuestion.question}
    </div>
    <div class="choices">
      {#each shuffle(currentQuestion.choices) as choice, index}
        {#if answered}
          <div
            class={userChoice === index
              ? choice.isAnswer
                ? "correct"
                : "incorrect"
              : choice.isAnswer
                ? "correct"
                : ""}
          >
            {index + 1}. {choice.text}
          </div>
        {:else}
          <div class="button" role="button" tabindex={index + 1} onclick={() => handleChoice(choice, index)}>
            {index + 1}. {choice.text}
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <!-- TODO: Left and right navigation arrows -->
  <div></div>
</div>

<style>
  h2 {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    .container {
      width: 640px;
    }
  }

  .card {
    padding: 2rem;
    width: 100%;
    background-color: #3b3b3b;
    border-radius: 1rem;
  }

  .question {
    min-height: 3.75rem;
  }

  .choices {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .button:hover {
    color: var(--text-link);
    cursor: pointer;
  }

  .correct {
    color: rgb(80, 150, 255);
  }
  .correct::after {
    content: " ✔";
  }

  .incorrect {
    color: rgb(255, 90, 120);
  }
  .incorrect::after {
    content: " ❌";
  }
</style>
