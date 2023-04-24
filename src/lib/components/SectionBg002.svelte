<script lang="ts">

function randomPercentage() {
  const str = (Math.random() * 101).toFixed(1);
  const percent=parseFloat(str)+"%"
  return percent;
}

// ###########################################
const colors = [
  "NFTW-blue-200",
  "NFTW-blue-300",
  "NFTW-blue-400",
  "NFTW-lila-200",
  "NFTW-lila-300",
  "NFTW-lila-400",
  "NFTW-pink-200",
  "NFTW-pink-300",
  "NFTW-pink-400",
  ];
  function randomColor() {
    const random = Math.floor(Math.random() * colors.length);
    const color = colors[random];
    return color;
  }

</script>

<div class="relative isolate bg-NFTW-black-800 px-6 py-24 sm:py-32 lg:px-8">
  <div
    class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
    aria-hidden="true"
  >
  
  <!-- ##################################### -->
  <div
  class="mx-auto aspect-[1155/678] w-full bg-gradient-to-tr from-NFTW-pink-300 to-NFTW-blue-400 opacity-30"
  style="clip-path: polygon({randomPercentage()} {randomPercentage()}, 100% 61.6%, 97.5% 26.9%, {randomPercentage()} 0.1%, 80.7% 2%, 72.5% 32.5%, {randomPercentage()} 62.4%, 52.4% 68.1%, 47.5% 58.3%, {randomPercentage()} 34.5%, 27.5% 76.7%, 0.1% 64.9%, {randomPercentage()} 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
  />    
  

</div>
  <div
    class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 gap-x-16 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
  >
    <slot />
  </div>
</div>

<style>
</style>
