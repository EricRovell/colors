<script>
  import { color } from "@stores/colorStore.js";
  import { parser } from "@stores/parserStore.js";

  import Input from "./Input.svelte";
  import State from "./State.svelte";
  import Navigation from "@components/Navigation.svelte";

  let userInput = "";

  let state = "empty";

  $: {
    // check the input
    if (!userInput.trim().length) {
      state = "empty";
    } else {
      // parse user's input
      // result is the array of possible color models
      const result = parser.parseString(userInput);

      if (result.length) {
        color.setColor(result[0]);
        state = "valid";
      } else {
        state = null;
      }
    }
  }
</script>

<Input
  bind:value={userInput}
  clearInput={() => userInput = ""}
  randInput={() => userInput = $color.randomColorString}>
    {#if state !== "empty"}
      <Navigation />
    {/if}
</Input>

<State state={state} />
