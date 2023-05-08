<script lang="ts">
    import SectionHeader from "$lib/components/SectionHeader.svelte";
    import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
    import Stories from "$lib/sectionComponents/Stories.svelte";
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
    import { register } from 'swiper/element/bundle';
  
	//init the slider
    register();
  

    const testimonialData = [
        {
            name: "Debi Worknesh",
            bookedDestination: "Moon",
            bookedPurpose: "Photosafarie",
            givenStars: "4",
            reviewText: "I recently went on a photosafari to space with this company, and it was truly a remarkable experience. The team at this company were incredibly helpful, ensuring that we had all the necessary equipment to capture stunning photos of space and the Earth from above. See you next year!",
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
            givenStars: "5",
            reviewText: "If you're looking for a honeymoon that's truly out of this world, I highly recommend booking a trip to Venus with this company. The team provided us with an amazing two-week itinerary, filled with romantic excursions and once-in-a-lifetime experiences. Thank you soo much for this!",
            image: "/testimonials/Sung-HyunAysha.webp",
        }
    ]




</script>

<svelte:head>
	<title>Beispiel-Cases für Ihre Event Rallye</title>
	<meta name="description" content="Gewinnen Sie Einblicke in Einsatz-Szenarien der Event Rallye"/>
</svelte:head>


<SectionBg002>
	<div class="grid justify-center justify-self-center mx-auto max-w-7xl">
		<SectionHeader 
			title="Mission Completed."
			description="Discover what our customers have to say about their unforgettable experiences with us. Read their stories and testimonials to see why we're the go-to company for unique and unforgettable holidays in space."
			/>
			
		<Stories />
		
		<!--Slider-->
		<div class="w-full h-auto overflow-hidden">
			<swiper-container
				space-between=20
				autoplay="true"
				speed="600" 
				loop="true"
				slides-per-view={1}
				centered-slides={false}
				
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
	</div>
</SectionBg002>
