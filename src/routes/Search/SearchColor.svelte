<script>
  import { color } from "@stores/colorStore.js";
  import { parser } from "@stores/parserStore.js";

  import FadingWrapper from "@src/layout/FadingWrapper.svelte";

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

<FadingWrapper>
  <div>
    <Input
    bind:value={userInput}
    clearInput={() => userInput = ""}
    randInput={() => userInput = $color.randomColorString}>
      {#if state && state !== "empty"}
        <Navigation />
      {/if}
    </Input>
    <State state={state} />
  </div>
</FadingWrapper>

<style>
  div {
    width: 100%;
    max-width: var(--max-width);
  }
</style>