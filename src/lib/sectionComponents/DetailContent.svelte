<script lang="ts">
  export let img: string = "/brokenImage.png";
  export let title: string = "Lorem ipsum dolor";
  export let caption: string = "Lorem ipsum dolor";
  export let imgSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px
</script>

<div class="relative w-full">
  <div
    class="relative bg-blend-multiply bg-no-repeat"
    style="
background-image: url('{img}');
background-size: {imgSize};
background-position:center;
height:50vh;
"
  />
</div>
