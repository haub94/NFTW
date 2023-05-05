<script lang="ts">
  import { randomPercentage } from "$lib/tools/Tools.svelte";

  export let twoCols: boolean = false;
  export let paddingTop: string = "128px";
  export let paddingBottom: string = "128px";
</script>

<div class="relative isolate bg-NFTW-bg px-6 lg:px-8"style="padding-top:{paddingTop} ; padding-bottom:{paddingBottom};">
  <div
    class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
    aria-hidden="true"
  >
    <div
      class="mx-auto aspect-[1155/678] w-full bg-gradient-to-tr from-NFTW-pink-300 to-NFTW-blue-400 opacity-30"
      style="clip-path: polygon({randomPercentage()} {randomPercentage()}, 100% 61.6%, 97.5% 26.9%, {randomPercentage()} 0.1%, 80.7% 2%, 72.5% 32.5%, {randomPercentage()} 62.4%, 52.4% 68.1%, 47.5% 58.3%, {randomPercentage()} 34.5%, 27.5% 76.7%, 0.1% 64.9%, {randomPercentage()} 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    />
  </div>
  
    <!-- universal with full width -->
    {#if !twoCols}
      <div class="mx-auto w-full items-center sm:gap-y-0" >
        <slot />
      </div>
    {/if}
  
  <!-- 2 cols -->
  {#if twoCols}
    <div
      class="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 gap-x-16 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
    >
      <slot />
    </div>
  {/if}
</div>
