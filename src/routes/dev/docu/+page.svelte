<script>
  import DiDropbox from 'svelte-icons/di/DiDropbox.svelte';
  import FaCode from 'svelte-icons/fa/FaCode.svelte';
  import FaPaintRoller from 'svelte-icons/fa/FaPaintRoller.svelte';
</script>

<div class="lg:pl-72 bg-NFTW-lila-800">
    <div class="w-full h-16 bg-bg-NFTW-lila-800 flex justify-center items-center">
        <h2 class="text-white font-bold text-2xl">Welcome</h2>
    </div>
    <div class="p-4 sm:p-6 lg:p-8 rounded-tl-xl bg-NFTW-blue-100 ">  
        <div class="relative isolate overflow-hidden bg-NFTW-blue-100 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 h-screen">
            <div class="absolute inset-0 -z-10 overflow-hidden">
              <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                <defs>
                  <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y="-1" class="overflow-visible fill-NFTW-blue-100">
                  <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
              </svg>
            </div>
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div class="lg:pr-4">
                  <div class="lg:max-w-lg">
                    <p class="text-base font-semibold leading-7 text-NFTW-pink-500">Develop faster</p>
                    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">For a better workflow</h1>
                    <p class="mt-6 text-xl leading-8 text-gray-700">Welcome to the documentation page of the NFTW Adventures website. As a good developer, you should record any changes here.</p>
                  </div>
                </div>
              </div>
              <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img class="bg-none" src="/illustrations/astronaut.png" alt="">
              </div>
              <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div class="lg:pr-4">
                  <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p>The documentation is divided into four sections: Components, Scripts, Database and Design. </p>
                    

                    <ul role="list" class="mt-8 space-y-8 text-gray-600">
                      <li class="flex gap-x-3">
                        <div class="mt-1 h-8 w-8 flex-none text-NFTW-pink-500">
                          <DiDropbox />
                        </div>
                        <span><strong class="font-semibold text-gray-900">Components. </strong>All components used on the site are listed in the first chapter. The information to be stored is provided with a template in the code at the appropriate place and in the about site. The template must be strictly adhered to and all data must be entered!</span>
                      </li>
                      <li class="flex gap-x-3">
                        <div class="mt-1 h-8 w-8 flex-none text-NFTW-pink-500">
                          <FaCode />
                        </div>
                        <span><strong class="font-semibold text-gray-900">TypeScript's. </strong>All scripts must be written without errors in Typescript and stored in text form in the documentation! The appropriate template can be found in the about site.</span>
                      </li>
                      <li class="flex gap-x-3">
                        <svg class="mt-1 h-8 w-8 flex-none text-NFTW-pink-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                          <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                        </svg>
                        <span><strong class="font-semibold text-gray-900">Database. </strong>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
                      </li>
                      <li class="flex gap-x-3">
                        <div class="mt-1 h-8 w-8 flex-none text-NFTW-pink-500">
                          <FaPaintRoller />
                        </div>
                        <span><strong class="font-semibold text-gray-900">Corporate Design. </strong>The corporate design to be used for the styling is provided in the last chapter. All changes to the design must be noted there!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          




    </div>
</div>

