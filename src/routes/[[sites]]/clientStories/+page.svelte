<script lang="ts">
    import SectionHeader from "$lib/components/SectionHeader.svelte";
    import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
    import Stories from "$lib/sectionComponents/Stories.svelte";
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
    import { register } from 'swiper/element/bundle';
    import { onMount } from 'svelte';
    import { dev } from "$app/environment";

	import type { PageData } from './$types'
	import type { CUSTOMER_DATA } from "../../../../prisma/tableInterfaces";
	import type { RATING_DATA } from "../../../../prisma/tableInterfaces";
	import type { IMAGES } from "../../../../prisma/tableInterfaces";

	const EMPTY_STRING = "";


	export let data: PageData;
  
	//init the slider
    register();
  

	let testimonialData = [
        {
            name: "",
            bookedDestination: "",
            bookedPurpose: "",
            givenStars: "",
            reviewText: "",
            image: "",
        },
	]

	let CUSTOMER_DATA: CUSTOMER_DATA[];
  	let RATING_DATA: RATING_DATA[];
  	let IMAGES: IMAGES[];

	function load() {
		({ CUSTOMER_DATA } = data);
		({ RATING_DATA } = data);
		({ IMAGES } = data);
		if (dev) {
			console.log('CUSTOMER_DATA @ clientStories :>> ', CUSTOMER_DATA);
			console.log('RATING_DATA @ clientStories :>> ', RATING_DATA);
			console.log('IMAGES @ clientStories :>> ', IMAGES);
			
		}
	} 

	function getDestinationFromString(destAndPurpose: string) {
		let arraySplittedString = destAndPurpose.split(";");
		return arraySplittedString[0];
	}

	function getPurposeFromString(destAndPurpose: string) {
		let arraySplittedString = destAndPurpose.split(";");
		return arraySplittedString[1];
	}


	function setTestimonialData(): boolean {
		for (let customerIndex = 0; customerIndex < CUSTOMER_DATA.length; customerIndex++) {
			if (CUSTOMER_DATA[customerIndex].testimonial !== EMPTY_STRING) {
				//find the image from the current testimonial by crwaling the IMAGE-data with the 
				//testimonial-identifier from the CUSTOMER_DATA 
				let currentImagePath: string = "";
				for (let imageIndex = 0; imageIndex < IMAGES.length; imageIndex++) {
					if (IMAGES[imageIndex].name === CUSTOMER_DATA[customerIndex].testimonial) {
						currentImagePath = IMAGES[imageIndex].path;
					}
				}

				//get the rating data from the current testimonial
				let ratingStars: string = "";
				let ratingText: string = "";
				for (let ratingIndex = 0; ratingIndex < RATING_DATA.length; ratingIndex++) {
					if (CUSTOMER_DATA[customerIndex].testimonial === RATING_DATA[ratingIndex].testimonial) {
						ratingStars = RATING_DATA[ratingIndex].amountStars;
						ratingText = RATING_DATA[ratingIndex].ratingText;
					}
					
				}
				//fill testimonial data with the values from the db
				testimonialData.push({
					name: CUSTOMER_DATA[customerIndex].firstName + " " + CUSTOMER_DATA[customerIndex].lastName,
					bookedDestination: getDestinationFromString(CUSTOMER_DATA[customerIndex].journeyConfig),
					bookedPurpose: getPurposeFromString(CUSTOMER_DATA[customerIndex].journeyConfig),
					givenStars: ratingStars,
					reviewText: ratingText,
					image: currentImagePath,
				})

			}
				
		}
		if (dev) {
			console.log('testimonalData @ clientStories :>> ', testimonialData);
		}
		return true
	}

	//###main
	//load data from the db and push it to the testimonial data puffer
	load();
	setTestimonialData();

</script>

<svelte:head>
	<title>Beispiel-Cases für Ihre Event Rallye</title>
	<meta name="description" content="Gewinnen Sie Einblicke in Einsatz-Szenarien der Event Rallye"/>
</svelte:head>


<SectionBg002>
	<button on:click={setTestimonialData}  class="bg-indigo-500 w-28 h-20 rounded-lg">load function</button>
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
					{#if person.name !== ""} <!--quick and dirty to kickoff the 0th, empty object-->
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
					{/if}	
				{/each}
			</swiper-container>
		</div>
	</div>
</SectionBg002>
