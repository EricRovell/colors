<script>
  import { color } from "@stores/colorStore.js";

  // fade in/out container to switch between states
  import ContainerFade from "@components/ContainerFade.svelte";

  // possible user input state modes
  import ColorInputTip from "@components/svg/ColorInputTip.svelte";
  import StateValid from "./StateValid.svelte";
  import StateInvalid from "./StateInvalid.svelte";

  // user input prop
  export let emptyInput;
</script>

<div>
  {#if emptyInput}
    <ContainerFade>
      <ColorInputTip />
    </ContainerFade>
  {:else if $color.valid}
    <ContainerFade>
      <StateValid model={$color.model} />
    </ContainerFade>
  {:else}
    <ContainerFade>
      <StateInvalid />
    </ContainerFade>    
  {/if}
</div>
