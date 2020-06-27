<script>
  // fade in/out container to switch between states
  import ContainerFade from "@components/ContainerFade.svelte";

  // possible user input state modes
  import ColorInputTip from "@components/svg/ColorInputTip.svelte";
  import StateValid from "./StateValid.svelte";
  import StateInvalid from "./StateInvalid.svelte";

  // user input prop
  export let state = "";
</script>

<div>
  {#if state === "empty"}
    <ContainerFade>
      <ColorInputTip />
    </ContainerFade>    
  {:else if state}
    <ContainerFade>
      <StateValid {...state} />
    </ContainerFade>
  {:else}
    <ContainerFade>
      <StateInvalid />
    </ContainerFade>    
  {/if}
</div>
