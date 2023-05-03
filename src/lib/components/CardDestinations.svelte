<script lang="ts"> 
  export let image: string = "/brokenImage.png";
  export let name: string = "Lorem ipsum dolor";
  export let promoText: string = "Lorem ipsum dolor";
  export let price: string = "Lorem ipsum dolor";
  export let imgPosition: string = "left";
  export let imgSize: string | number = "cover";
  export let path: string = "/";
</script>



<a href={path}>

 <div class="group rounded-3xl p-8 xl:p-10 ring-2 bg-NFTW-black-500 hover:scale-125 transition-all cursor-pointer"
      style="background-image: url('{image}');
      background-size: {imgSize};
      background-position: {imgPosition}">
   <div class="flex items-center justify-between gap-x-4">
    <h3 id="card-{name}" class="text-lg font-semibold leading-8 text-NFTW-blue-50">{name}</h3>
   </div>
  <p class="mt-4 text-sm leading-6 text-NFTW-blue-50">{promoText}</p>
  <p class="mt-6 flex items-baseline gap-x-1">
    <span class="text-4xl font-bold tracking-tight text-NFTW-blue-50">{price}</span>
  </p>
  <a href={path} 
  aria-describedby="link-{name}" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-NFTW-lila-800 text-NFTW-blue-50 shadow-sm hover:bg-NFTW-lila-600"
  >Get more details</a>
  </div>
</a>

  
    
