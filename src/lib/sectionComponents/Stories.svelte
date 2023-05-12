<script>
    import StorieCard from "$lib/components/StorieCard.svelte";

    const cardData = [
        {
            destination: "Venus",
            purpose: "Honeymoon",
            completedTrips: "23"
        },
        {
            destination: "Mars",
            purpose: "Vacation",
            completedTrips: "49"
        },
        {
            destination: "Moon",
            purpose: "Birthdayspecial",
            completedTrips: "11"
        },
        {
            destination: "Mars",
            purpose: "Photosafarie",
            completedTrips: "36"
        },
        {
            destination: "Venus",
            purpose: "Saisonal Offer",
            completedTrips: "9"
        },
    ]
    
</script>

<div class="mb-28 w-full grid grid-col md:grid-cols-2 xl:grid-cols-3">
    {#each cardData as card}
        <div class="mx-auto">
            <StorieCard 
            destination={card.destination}
            purpose={card.purpose}
            completedTrips={card.completedTrips}
        />
        </div> 
    {/each}
</div>