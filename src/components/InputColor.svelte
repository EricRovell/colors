<!--
Input state (enum)
  - Empty
  - Unknown value / Error
  - Valid Color
-->

<script>
  import { fade } from "svelte/transition";

  import detemineColorString from "../util/determine/determineColorString.js";

  // state components
  import InputColorStateTip from "./InputColorStateTip.svelte";
  import InputColorStateValid from "./InputColorStateValid.svelte";
  import InputColorStateInvalid from "./InputColorStateInvalid.svelte";

  // color string
  let colorString;

  $: colorModel = detemineColorString(colorString);
</script>

<style>
  input[type=text] {
    border: 1px solid red;
    width: 50vw;
  }
</style>

<div>
  <input type="text" bind:value={colorString} />
  <div>
    {#if !colorString || colorString.length === 0}
      <div out:fade="{{ duration: 300 }}">
        <InputColorStateTip />
      </div>
    {:else if colorModel}
      <InputColorStateValid {colorModel} />
    {:else}
      <InputColorStateInvalid />
    {/if}
  </div>
</div>
