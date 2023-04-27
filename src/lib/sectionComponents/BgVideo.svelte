<script lang="ts">
  import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";

  export let title: string = "Lorem ipsum dolor";
  export let caption: string = "Lorem ipsum dolor";
  export let video: string = "/videos/SPACE_SD.mp4";
  export let videoHeight: string | number = "50vh";
  export let captionPath: string = "";
</script>

<body class="bg-NFTW-bg text-NFTW-white">
  <section
    class="videoCon relative overflow-hidden"
    style="height:{videoHeight}"
  >
    <video
      src={video}
      autoplay
      loop
      playsinline
      muted
      class="object-cover absolute h-full w-full top-0 left-0"
    />
    <div
      class="callout relative flex justify-center items-center h-full text-center z-10"
      style="flex-direction: column"
    >
      <h1
        class="p-0"
        style=" font-weight: 900;
      margin: 0 0 1rem;
      line-height: 1;
      font-size: 5vw;"
      >
        {title}
      </h1>
      {#if checkUndefinedNullOrEmpty(captionPath)}
        <div class="caption" style="font-size:2vw">
          {caption}
        </div>
      {:else}
        <a href={captionPath}>
          <div class="caption" style="font-size:2vw">
            {caption}
          </div>
        </a>
      {/if}
    </div>
  </section>
</body>

<style>
  .videoCon:after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(black, 0.2);
    z-index: 1;
  }
</style>
