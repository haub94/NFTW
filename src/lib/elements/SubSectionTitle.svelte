<script lang="ts">
	export let title: string;
	export let hType: string;

	const styling: string = "mb-6 font-sans text-xl font-bold tracking-tight text-grey-500 sm:leading-none";
</script>

{#if hType === "1"}
	<h1
		class=""
		>
			{title}
	</h1>
{:else if  hType === "2"}
	<h2
	class={styling}
	>
		{title}
	</h2>
{:else if  hType === "3"}
	<h3
	class={styling}
	>
		{title}
	</h3>
{:else if  hType === "4"}
	<h4
	class={styling}
	>
		{title}
	</h4>
{:else if  hType === "5"}
	<h5
	class={styling}
	>
		{title}
	</h5>
{:else if  hType === "6"}
	<h6
	class={styling}
	>
		{title}
	</h6>
{/if}



