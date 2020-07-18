<script>
  import sections from "@stores/sections.js";
</script>

<ol>
  {#each $sections as sectionName}
    <li>
      <a href={`#search-section-${sectionName.toLowerCase()}`}>
        {sectionName}
      </a>
    </li>
  {/each}
</ol>

<style>
  ol {
    list-style: none;

    display: flex;
    align-items: center;
    user-select: none;
  }

  li {
    background: white;
    padding: 0.1em 0.5em;
    border-radius: 5px;
    filter: drop-shadow(1px 1px 5px rgb(0 0 0 / 0.1));
  }

  li:not(:first-child) {
    margin-left: 0.5em;
  }

  li:hover {
    filter:
      drop-shadow(1px 1px 5px rgb(0 0 0 / 0.1))
      drop-shadow(1px 1px 10px rgb(0 0 0 / 0.25));
  }
</style>