<script>
  import Palette from "@components/Palette.svelte";

  export let params = {};

  function parseColors(string) {
    return string
      .split("&")
      .map(color => {
        const [ model, ...values ] = color.split(",");
        return {
          model,
          values: values.map(Number)
        };
      });
  }

  $: data = parseColors(params.colors);
</script>

<div>
  <Palette colors={data} />
</div>
