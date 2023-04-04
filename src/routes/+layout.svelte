<script>
    import Footer from "$lib/Footer.svelte";
    
    import Header from "$lib/Header.svelte";

    

    import "../app.css";


</script>

<Header publicVar="Wert aus layout"/>

<div class="bg-green-600 h-24">
    <slot />
</div>


<Footer />

