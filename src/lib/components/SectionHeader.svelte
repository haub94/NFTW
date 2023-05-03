<script lang="ts">
  export let title: string = "title";
  export let description: string = "description";
</script>

<div class="w-full flex flex-col text-center space-y-6 mb-20">
  <h1 class="text-4xl font-bold tracking-tight text-NFTW-white sm:text-5xl">
    {title}
  </h1>
  <p class="mx-auto max-w-2xl text-lg leading-8 text-NFTW-white/60">
    {description}
  </p>
</div>
