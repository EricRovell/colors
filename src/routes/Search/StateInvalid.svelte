<script>
  import { fade } from "svelte/transition";

  import Question from "@components/svg/Question.svelte";
</script>

<div in:fade="{{ duration: 500 }}">
  <Question />
  <div>
    Invalid or Unknown input
  </div>
</div>
