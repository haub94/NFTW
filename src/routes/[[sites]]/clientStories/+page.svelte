<script lang="ts">
    import SectionHeader from "$lib/components/SectionHeader.svelte";
    import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
    import Stories from "$lib/sectionComponents/Stories.svelte";
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
    import { register } from 'swiper/element/bundle';
    import { dev } from "$app/environment";
	import { selectImageFromDb } from "$lib/functions/selectImageFromDb.ts";

	import type { PageData } from './$types'
	import type { CustomerData } from "../../../../prisma/tableInterfaces";
	import type { RatingData } from "../../../../prisma/tableInterfaces";
	import type { ImageData } from "../../../../prisma/tableInterfaces";

	const EMPTY_STRING: string = "";
	const IMAGE_PATH_INDEX: number = 0;
	const IMAGE_ALTTEXT_INDEX: number = 1;

	export let data: PageData;
	let testimonialData = [
        {
            name: "",
            bookedDestination: "",
            bookedPurpose: "",
            givenStars: "",
            reviewText: "",
            imagePath: "",
			imageAltText: ""
        },
	]

	let CUSTOMER_DATA: CustomerData[];
  	let RATING_DATA: RatingData[];
  	let IMAGES: ImageData[];

	//load data from the db (load-function from the page.server.ts)
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

	//destination and purpose comes from one string
	//split it by ";" to get the destination
	function getDestinationFromString(destAndPurpose: string) {
		let arraySplittedString = destAndPurpose.split(";");
		return arraySplittedString[0];
	}

	//destination and purpose comes from one string
	//split it by ";" to get the journey purpose
	function getPurposeFromString(destAndPurpose: string) {
		let arraySplittedString = destAndPurpose.split(";");
		return arraySplittedString[1];
	}

	//write data from the db into the testimonialData buffer 
	function setTestimonialData() {
		for (let customerIndex = 0; customerIndex < CUSTOMER_DATA.length; customerIndex++) {
			if (CUSTOMER_DATA[customerIndex].testimonial !== EMPTY_STRING) {
				//get the image for the current testimonial
				//take the testimonial name from the CUSTOMER_DATA, search the same value in the IMAGES
				//and if there is a match, use the data
				let currentImage: string[] = ["", ""];
				for (let imageIndex = 0; imageIndex < IMAGES.length; imageIndex++) {
					if (IMAGES[imageIndex].name === CUSTOMER_DATA[customerIndex].testimonial) {
						currentImage = selectImageFromDb(CUSTOMER_DATA[customerIndex].testimonial, IMAGES) as string[];	
					}
				}

				//get the rating data for the current testimonial
				//take the testimonial name from the CUSTOMER_DATA, search the same value in the RATING_DATA
				//and if there is a match, use the data
				let ratingStars: string = "";
				let ratingText: string = "";
				for (let ratingIndex = 0; ratingIndex < RATING_DATA.length; ratingIndex++) {
					if (CUSTOMER_DATA[customerIndex].testimonial === RATING_DATA[ratingIndex].testimonial) {
						ratingStars = RATING_DATA[ratingIndex].amountStars;
						ratingText = RATING_DATA[ratingIndex].ratingText;
					}
					
				}
				//push into testimonialData
				testimonialData.push({
					name: CUSTOMER_DATA[customerIndex].firstName + " " + CUSTOMER_DATA[customerIndex].lastName,
					bookedDestination: getDestinationFromString(CUSTOMER_DATA[customerIndex].journeyConfig),
					bookedPurpose: getPurposeFromString(CUSTOMER_DATA[customerIndex].journeyConfig),
					givenStars: ratingStars,
					reviewText: ratingText,
					imagePath: currentImage[IMAGE_PATH_INDEX],
					imageAltText: currentImage[IMAGE_ALTTEXT_INDEX],
				})

			}
				
		}
		if (dev) {
			console.log('testimonalData @ clientStories :>> ', testimonialData);
		}
	}

	//###main
	//load data from the db and push it to the testimonial data puffer
	register(); //init the slider
	load();
	setTestimonialData();


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
		<!--cards for the completed trips-->	
		<Stories />
		
		<!--Slider-->
		<div class="w-9/12 h-auto mx-auto overflow-hidden">
			<swiper-container
				pagination={true}
				space-between=20
				autoplay="true"
				speed="600" 
				loop="true"
				slides-per-view={1}
				centered-slides={false}
				
			>
				{#each testimonialData as person}
					{#if person.name !== ""} <!--quick and dirty to kickoff the first (index=0), empty object-->
						<swiper-slide>        
							<TestimonialCard 
								name={person.name}
								bookedDestination={person.bookedDestination}
								bookedPurpose={person.bookedPurpose}
								givenStars={person.givenStars}
								text={person.reviewText}
								imagePath={person.imagePath}
								imageAltText={person.imageAltText}
							/>    
						</swiper-slide>	 
					{/if}	
				{/each}
			</swiper-container>
		</div>
	</div>
</SectionBg002>
