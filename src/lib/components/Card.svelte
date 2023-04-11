<script lang="ts">
  import { checkUndefinedNullOrEmpty } from "../tools/Tools.svelte";

  export let img: string = "/brokenImage.png";
  export let title: string = "defaultVaule";
  export let caption: string = "defaultVaule";
</script>

<a
  href="/"
  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <img
    class="h-auto w-48 object-cover rounded-l-lg"
    src={checkUndefinedNullOrEmpty(img) ? "/brokenImage.png" : img}
    alt=""
  />
  <div class="flex flex-col justify-between p-4 leading-normal">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {title}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{caption}</p>
  </div>
</a>

<style>
</style>
