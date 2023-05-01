<script lang="ts">
    export let buzzWord: string = "buzzword";
    export let text: string = "descripe buzzword here";
    export let color: string = "green"; //color controling

    let stateColor: string = "bg-white-600";
    let bannerHidden: boolean = false;


    export function setVisibilityState() {
        bannerHidden = !bannerHidden;
    }

    //color controller
    switch (color) {
        case "green":
            stateColor = "bg-lime-800"; //all good
            break;
        case "red":
            stateColor = "bg-red-800";  //error
            break;
        default:
            stateColor = "bg-gray-800"; //info
            break;
    }



</script>

<div class:hidden={bannerHidden} class="pointer-events-none sm:px-6 sm:pb-5 lg:px-8">
  <div class="pointer-events-auto flex items-center justify-between gap-x-6 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5 {stateColor}">     
    <p class="text-sm leading-6 text-white">
      <span class="font-semibold uppercase">{buzzWord}</span>
      <svg viewBox="0 0 2 2" class="mx-2 inline h-1 w-1 fill-current" aria-hidden="true">
          <circle cx="1" cy="1" r="1" />
      </svg>
      {text}
    </p>
    <button on:click={setVisibilityState} type="button" class="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]">
      <span class="sr-only">Dismiss</span>
      <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
</div>
  