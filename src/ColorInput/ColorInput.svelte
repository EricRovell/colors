<script>
  import Input from "./Input.svelte";
  import State from "./State.svelte";

  import parseColorString from "../util/parse/parseColorString.js";
  import randomColorString from "@util/randColor/randomColorString.js";

  let userInput = "";

  $: state = (!userInput.trim().length)
    ? "empty"
    : parseColorString(userInput);
</script>


<Input
  bind:value={userInput}
  clearInput={() => userInput = ""}
  randColorInput={() => userInput = randomColorString({ asString: true })} />
<State {state} />
