<script>
  import { color } from "@stores/colorStore.js";

  import Input from "./Input.svelte";
  import State from "./State.svelte";
  import Suggestions from "@components/Suggestions.svelte";
  import Navigation from "@components/Navigation.svelte";

  import ColorParser from "@util/parse/parseColorString.js";

  const parser = new ColorParser();

  let userInput = "";
  let suggestions = [];

  $: emptyInput = !userInput.trim().length;

  function makeSearch() {
    if (event.key === "Enter") {
      const result = parser.parseString(userInput);
      if (result.length > 1) {
        suggestions = result;
      }
      if (result.length === 1) {
        color.setColor(...result);
      }
    }
  }
</script>

<Input
  bind:value={userInput}
  {makeSearch}
  clearInput={() => userInput = ""}
  randInput={() => userInput = $color.model.cmyk.randomString}>
    {#if !emptyInput}
      <Navigation />
      <Suggestions {suggestions} />
    {/if}
</Input>

<State
  emptyInput={emptyInput}
/>
