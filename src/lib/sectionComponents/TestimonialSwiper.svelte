<script>
    import TestimonialCard from '$lib/components/TestimonialCard.svelte';
    import { register } from 'swiper/element/bundle';
  
    register();
  

    const testimonialData = [
        {
            name: "Debi Worknesh",
            bookedDestination: "Moon",
            bookedPurpose: "Photosafarie",
            givenStars: "4",
            reviewText: "I recently went on a photo safari to space with this company, and it was truly a remarkable experience. The team at this company were incredibly helpful, ensuring that we had all the necessary equipment to capture stunning photos of space and the Earth from above. See you next year!",
            image: "/testimonials/DebiWorknesh.webp",
        },
        {
            name: "Marcius Cecilio",
            bookedDestination: "Mars",
            bookedPurpose: "Vacation",
            givenStars: "3",
            reviewText: "I highly recommend this company for anyone interested in a trip to Mars. They offer top-notch accommodations and an unforgettable journey through space. The team is knowledgeable and experienced, and they go above and beyond to ensure that your trip is safe, and out of this world.",
            image: "/testimonials/MarciusCecilio.webp",
        },
        {
            name: "Sung-Hyun Aysha",
            bookedDestination: "Venus",
            bookedPurpose: "Honeymoon",
            givenStars: "3",
            reviewText: "If you're looking for a honeymoon that's truly out of this world, I highly recommend booking a trip to Venus with this company. The team provided us with an amazing two-week itinerary, filled with romantic excursions and once-in-a-lifetime experiences. Thank you soo much for this!",
            image: "/testimonials/Sung-HyunAysha.webp",
        }
    ]




  </script>
  
  <div class="m-6">
    <swiper-container
        space-between=20
        autoplay="true"
        speed="400" 
        loop="true"
        slides-per-view={1}
        centered-slides={false}
        pagination={{
        hideOnClick: true,
        }}
    >
        {#each testimonialData as person}
            <swiper-slide>        
                <TestimonialCard 
                    name={person.name}
                    bookedDestination={person.bookedDestination}
                    bookedPurpose={person.bookedPurpose}
                    givenStars={person.givenStars}
                    text={person.reviewText}
                    image={person.image}
                />    
            </swiper-slide>
        {/each}
    </swiper-container>

</div>