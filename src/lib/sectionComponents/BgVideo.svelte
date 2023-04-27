<script lang="ts">
  export let title: string = "Lorem ipsum dolor";
  export let caption: string = "Lorem ipsum dolor";
  export let video: string =
    "https://player.vimeo.com/external/181445574.hd.mp4?s=d24f32d879305e931468d55e4d7ce6efb5a95c39&amp;profile_id=119";
    export let videoHeight:string|number="50vh";
</script>

<body>
  <section class="videoCon" style="height:{videoHeight}">
    <video src={video} autoplay loop playsinline muted />
    <div class="callout">
      <h1>{title}</h1>
      <div class="caption">{caption}</div>
    </div>
  </section>
</body>

<style>
  .videoCon {
    /* height: 50vh; */
    position: relative;
    overflow: hidden;
  }

  video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  body {
    background: #06000f;
    color: #e9e0ff;
  }

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

  h1 {
    font-weight: 900;
    margin: 0 0 1rem;
    padding: 0;
    line-height: 1;
    font-size: 5vw;
  }

  .caption {
    font-size: 2vw;
  }

  .callout {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    text-align: center;
    position: relative;
    z-index: 10;
  }
</style>
