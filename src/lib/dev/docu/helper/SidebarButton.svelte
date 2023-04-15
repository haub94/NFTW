<script lang="ts">
    export let pathTo: string;
    export let label: string;
</script>

<a href={pathTo} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
    {label}
</a>