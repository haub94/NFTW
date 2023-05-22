<script lang="ts">
    export let givenStars: string = "5";
    export let name: string = "testimonial name";
    export let bookedDestination: string = "destination";
    export let bookedPurpose: string = "purpose";
    export let text: string = "review text...";
    export let image: string = "/testimonials/DebiWorknesh.webp";

    let starColor: string[] = [
        "currentColor",
        "currentColor",
        "currentColor",
        "currentColor",
        "currentColor",
    ]

    switch (parseInt(givenStars)) {
        case 1:
            starColor[0] = "currentColor";
            starColor[1] = "";
            starColor[2] = "";
            starColor[3] = "";
            starColor[4] = "";
            break;
        case 2:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "";
            starColor[3] = "";
            starColor[4] = "";
            break;
        case 3:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "currentColor";
            starColor[3] = "";
            starColor[4] = "";
            break;
        case 4:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "currentColor";
            starColor[3] = "currentColor";
            starColor[4] = "";
            break;
        case 4:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "currentColor";
            starColor[3] = "currentColor";
            starColor[4] = "currentColor";
            break;
    
        default:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "currentColor";
            starColor[3] = "currentColor";
            starColor[4] = "currentColor";
            break;
    }
    

</script>

<section class="bg-NFTW-blue-200 px-6 py-10 lg:px-8 rounded-xl">
    <figure class="mx-auto max-w-2xl">
      <p class="sr-only">5 out of 5 stars</p>
      <div class="flex gap-x-1 text-NFTW-pink-400">
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[0]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[1]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[2]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[3]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[4]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
      </div>
      <blockquote class="mt-10 text-xl font-semibold leading-8 tracking-tight text-NFTW-lila-900 sm:text-2xl sm:leading-9">
        <p>“{text}”</p>
      </blockquote>
      <figcaption class="mt-10 flex items-center gap-x-6">
        <img class="h-16 w-16 rounded-full bg-gray-50" src={image} alt="Portrait of the testimonial {name}" loading="lazy">
        <div class="text-sm leading-6">
          <div class="font-semibold text-NFTW-lila-900">{name}</div>
          <div class="mt-0.5 text-NFTW-lila-900 italic h-12">Booked Packages: {bookedDestination} & {bookedPurpose}</div>
        </div>
      </figcaption>
    </figure>
  </section>

  
  