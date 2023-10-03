<script lang="ts">
  export let bulletpoints: Array<string> = ["bulletpoints 1 - n"];
</script>

<ul class="list-disc space-y-1.5 pl-8 pb-4 text-base">
  {#each bulletpoints as points}
    <li>{points}</li>
  {/each}
</ul>
