<script lang="ts">
  export let publicVar = "defaultVaule";
  let var1: string = "text_var";

  function hello(): number {
    console.log("hello :>> ");
    return 1;
  }
</script>

<div class="flex flex-row bg-black p-5 text-3xl text-white mx-auto py-4 md:py-4 md:flex-row">
  <p>NFTW Adventures</p>
  <a href="/impressum" class="ml-48 text-lg bg-red-600">Impressum</a>
  <button class="ml-12 text-lg">spacetravel</button>
  <button class="ml-12 text-lg">client storys</button>
  <button class="ml-12 text-lg">{publicVar}</button>
</div>
