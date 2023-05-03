<script lang="ts">
    import SectionHeader from "$lib/components/SectionHeader.svelte";
    import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
    import Stories from "$lib/sectionComponents/Stories.svelte";
	import Testimonials from "$lib/sectionComponents/TestimonialSwiper.svelte";
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
		<Testimonials />
	</div>
</SectionBg002>



	



