<script>
  import Input from "./Input.svelte";
  import State from "./State.svelte";

  import parseColorString from "../util/parse/parseColorString.js";

  let userInput = "";

  $: state = (!userInput.trim().length)
    ? "empty"
    : parseColorString(userInput);

  const clearInput = () => userInput = "";
</script>


<Input bind:value={userInput} {clearInput} />
<State {state} />
