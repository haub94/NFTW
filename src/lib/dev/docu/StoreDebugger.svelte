<script>
    import packageMemory from "../../../stores/journeyConfigMemory"; 
</script>

<div>
<h1 class="text-3xl py-6 font-bold text-NFTW-blue-500 bg-NFTW-blue-200 border-b-2 border-white">DEV-ONLY: Current Values from the journeyConfigMemory</h1>
  <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
        <div class="bg-NFTW-blue-200 px-4 py-6 sm:px-6 lg:px-8">
          <p class="text-sm font-medium leading-6 text-NFTW-blue-950">Destination</p>
          <p class="mt-2 flex items-baseline gap-x-2">
            <span class="text-4xl font-semibold tracking-tight text-NFTW-blue-500">{$packageMemory.destination}</span>
          </p>
        </div>
        <div class="bg-NFTW-blue-200 px-4 py-6 sm:px-6 lg:px-8">
          <p class="text-sm font-medium leading-6 text-NFTW-blue-950">Journey Purpose</p>
          <p class="mt-2 flex items-baseline gap-x-2">
            <span class="text-4xl font-semibold tracking-tight text-NFTW-blue-500">{$packageMemory.journeyPurpose}</span>
          </p>
        </div>
        <div class="bg-NFTW-blue-200 px-4 py-6 sm:px-6 lg:px-8">
          <p class="text-sm font-medium leading-6 text-NFTW-blue-950">Start Date</p>
          <p class="mt-2 flex items-baseline gap-x-2">
            <span class="text-4xl font-semibold tracking-tight text-NFTW-blue-500">{$packageMemory.startDate}</span>
          </p>
        </div>
        <div class="bg-NFTW-blue-200 px-4 py-6 sm:px-6 lg:px-8">
          <p class="text-sm font-medium leading-6 text-NFTW-blue-950">End Date</p>
          <p class="mt-2 flex items-baseline gap-x-2">
            <span class="text-4xl font-semibold tracking-tight text-NFTW-blue-500">{$packageMemory.endDate}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  