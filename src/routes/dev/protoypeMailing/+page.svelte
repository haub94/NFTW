<script>
    export let form;
    let showNotification = true;
</script>


{#if form?.success && showNotification}
<div class="rounded-md bg-green-50 p-4 mt-12 max-w-6xl mx-auto">
    <div class="flex">
        <div class="flex-shrink-0">
            <!-- Heroicon name: mini/check-circle -->
            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="ml-3">
            <p class="text-xl font-medium text-green-800">Your mail was successfully sent.</p>
        </div>
        <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
                <button on:click={() => {showNotification = false}} type="button" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                    <span class="sr-only">Schließen</span>
                    <!-- Heroicon name: mini/x-mark -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>
{/if}
    
    
<div class="mx-auto max-w-6xl md:px-6 lg:px-8 mb-24">
    <div class="relative bg-gray-800 mx-auto md:rounded-xl max-w-7xl py-24 px-6 sm:py-24 lg:px-24">
        <div class="mt-16 md:px-6 lg:px-8 bg-gradient-to-r from-cyan-900 to-cyan-600 lg:rounded-lg">
            <div class="py-16 px-6 xl:flex lg:items-center lg:py-16 lg:px-8">
                <div class="xl:w-0 xl:flex-1">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl" id="newsletter-headline">PDF Download</h2>
                    <p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">Hier können Sie den Konferenz Sponsoring Benchmark-Report 2022 / 2023 per E-Mail anfordern.</p>
                </div>
                <div class="mt-8 xl:mt-0 xl:ml-8">
                    <form class="grid sm:grid-cols-2 gap-1" autocomplete="on" method="POST">
                        <label for="firstname" class="sr-only">Vorname</label>
                        <input id="firstname" name="firstname" type="text" autocomplete="given-name" required class="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Vorname">
                        <label for="lastname" class="sr-only">Nachname</label>
                        <input id="lastname" name="lastname" type="text" autocomplete="family-name" required class="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Nachname">
                        <label for="email" class="sr-only">E-Mail Adresse</label>
                        <input id="email" name="email" type="email" autocomplete="email" required class="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Ihre E-Mail Adresse">
                        <button type="submit" class="mt-3 sm:mt-0 w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800  bg-fuchsia-500 text-base font-medium text-white hover:bg-fuchsia-600 focus:outline-none" placeholder="Ihre E-Mail Adresse">Download anfordern</button>
                    </form>
                    <p class="mt-3 text-sm text-gray-300">
                        Datenschutz ist uns sehr wichtig. Hier finden Sie unsere
                        <a href="/datenschutz" class="font-medium text-white underline">Datenschutzerklärung.</a>
                    </p>
                </div>
            </div>
        </div>
    
    </div>
</div>

    

    
    