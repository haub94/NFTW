<script lang="ts">
    export let pathTo: string;
    export let label: string;
</script>

<a href={pathTo} class="bg-NFTW-lila-600 text-gray-300 flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-NFTW-lila-700" >
    {label}
</a>