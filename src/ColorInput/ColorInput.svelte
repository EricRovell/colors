<script>
  import Input from "./Input.svelte";
  import State from "./State.svelte";

  let userInput = "";
</script>

<Input
  bind:value={userInput}
  clearInput={() => userInput = ""} />
<State emptyInput={!userInput.trim().length} />
