<script>
  import { color } from "@stores/colorStore.js";

  // fade in/out container to switch between states
  import ContainerFade from "@components/ContainerFade.svelte";

  // possible user input state modes
  import ColorInputTip from "@components/svg/ColorInputTip.svelte";
  import StateValid from "./StateValid.svelte";
  import StateInvalid from "./StateInvalid.svelte";

  // user input prop
  export let state;

  const states = {
    "empty": ColorInputTip,
    "valid": StateValid,
    null: StateInvalid
  }
</script>

<div>
  <svelte:component this={states[state]} />
</div>

<style>
  div {
    width: 100%;
    margin: 1.5em 0 25vh 0;
  }
</style>
