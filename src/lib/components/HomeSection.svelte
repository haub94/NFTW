<script lang="ts">
</script>

<svelte:head>
    <title>Home Page</title>
    <meta name="description" content="Welcome to our space tourism company" />
</svelte:head>

<div
    class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
    <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
        <h2
            class="mt-2 text-4xl font-bold tracking-tight text-NFTW-white sm:text-5xl">
            What we offer
        </h2>
        <p class="text-NFTW-blue-50 text-2xl">
            We offer a variety of services for tourists who are interested in
            traveling to space.
        </p>
    </div>
    <div
        class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
        <div class="h-48 flex flex-wrap content-center">
            <div>
                <img
                    class="inline-block mt-28 hidden xl:block"
                    src="/home/spacecraftPill.png"
                    loading="lazy" />
            </div>
            <div>
                <img
                    class="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src="/home/astronautPill.png"
                    loading="lazy" />
            </div>
            <div>
                <img
                    class="inline-block mt-28 hidden lg:block"
                    src="/home/rocketPill.png"
                    loading="lazy" />
            </div>
        </div>
    </div>
</div>
