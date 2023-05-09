<script lang="ts">
	export let paragraph_start: string = "";
	export let paragraph_end: string = "";
	export let link: string = "";
</script>

<p class="pb-4 text-base">
	{paragraph_start}
	<a class="text-indigo-500" href={link}>
		{link}
	</a>
	{paragraph_end}
</p>
