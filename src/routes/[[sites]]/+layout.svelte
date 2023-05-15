<script>
    import Footer from "$lib/sectionComponents/Footer.svelte";
    import Header from "$lib/sectionComponents/Header.svelte";
    import StoreDebugger from "$lib/dev/docu/StoreDebugger.svelte";
</script>


<Header />

<slot />

<Footer />

<StoreDebugger />

