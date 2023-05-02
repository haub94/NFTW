<script>
	//import SvgVisitors from '$lib/icons/svgVisitors.svelte';

	export let logo;
	export let eventName;	//for alt image alt-tag
	export let textVisitor;
	export let visitors;
	export let business;
	export let picture;
	//export let pictureAlt;
	export let leadV;
	export let leadA;
	export let gLeads = [];
	export let gStatistics = [];
	export let gPercentuals = [];

</script>


<div class="rounded-lg bg-gray-100 border border-gray-300 p-2 max-w-sm place-self-center">
	<div class="flex flex-col rounded-t-lg bg-zinc-50">
		<div class="flex flex-col">
		<div class='flex flex-row justify-center h-14 bg-white rounded-t-lg space-x-22'>

			<!--visitors-->
			<div class='w-1/2 grid grid-flow-row auto-rows-min pr-2 pt-2 justify-items-end'>
					<div class='text-gray-400 font-semibold uppercase text-[9px]'>{textVisitor}</div>
						<div class='flex flex-row items-center'>
							<!--<SvgVisitors cssClass="inline-flex h-8 w-8 text-fuchsia-700" />-->
							<div class='ml-2 text-2xl text-gray-500'>{visitors}</div>
						</div>
					</div>
			</div>
		</div>

		<!--image-->
		<div class='flex h-44 w-full'>
			<div class="flex-1 bg-center bg-local bg-no-repeat bg-cover" style="background-image: url({picture});">
				<!--<span class="sr-only">{pictureAlt}</span>-->
				<div class='bg-fuchsia-500 h-7 w-fit pl-1 p-1.5 rounded-br text-xs font-normal text-white uppercase'>Branche: {business}</div>
			</div>
		</div>

		<div class='w-full flex flex-row flex-wrap bg-white justify-center rounded-b-lg'>

			<div class='flex flex-col w-full'>
				<div class='bg-gray-200 w-full text-gray-500 flex justify-center h-10 border-b border-gray-200/90'>
					<p class='flex items-center'><span class='uppercase font-medium'>{leadV}</span></p>
				</div>
				<div class='flex flex-row w-full'>

					<!--first-square-->
					<div class='w-1/2'>
						<div class='flex items-center justify-end text-gray-900 h-32'>
							<div class='flex flex-row-reverse space-x-4 space-x-reverse sm:space-x-6 sm:space-x-reverse md:space-x-reverse md:space-x-7 xl:space-x-reverse xl:space-x-8'>
							<div class="border-r border-gray-200/50"></div>
							<div class='flex flex-col items-center w-max'>
									<div class="h-14 w-14 text-gray-300 mb-1.5">
										<slot name="iconUpperLeft"/>
									</div>
									<div class='text-gray-400 text-xxs uppercase font-normal'>{gLeads[0]}</div>
									<div class='flex flew-row justify-items-end space-x-1.5'>
										<div class='text-2xl font-bold text-fuchsia-700'>{gStatistics[0]}</div>
										<div class='text-2xl text-gray-400'>{gPercentuals[0]}</div>
									</div>
								</div>
						</div>
						</div>
							<!--<div class='border-b border-slate-700/50 w-32'></div>-->
					</div>

					<!--second-square-->
					<div class='w-1/2'>
						<div class='flex items-center justify-start text-gray-900 h-32'>
							<div class='flex flex-row space-x-5 sm:space-x-7 md:space-x-7'>
								<div class="border-l border-gray-300/50"></div>
								<div class='flex flex-col items-center'>
									<div class="h-14 w-14 text-gray-300 mb-1.5">
										<slot name="iconUpperRight" />
									</div>
									<div class='text-gray-400 text-xxs uppercase font-normal'>{gLeads[1]}</div>
									<div class='flex flew-row justify-items-end space-x-1.5'>
										<div class='text-2xl font-bold text-fuchsia-700'>{gStatistics[1]}</div>
										<div class='text-2xl text-gray-400'>{gPercentuals[1]}</div>
									</div>
								</div>
							</div>
						</div>
						<!--<div class='border-b border-slate-700/50 w-32'></div>-->
					</div>

				</div>
			</div>

			<div class='flex flex-col w-full'>
				<div class='bg-gray-200 w-full text-gray-500 flex justify-center h-10 border-b border-gray-200/90'>
					<p class='flex items-center'><span class='uppercase font-medium'>{leadA}</span></p>
				</div>
				<div class='flex flex-row w-full'>

					<!--third-square-->
					<div class='w-1/2'>
						<div class='flex items-center justify-end text-gray-900 h-32'>
							<div class='flex flex-row-reverse space-x-4 space-x-reverse sm:space-x-5 sm:space-x-reverse md:space-x-reverse md:space-x-5 xl:space-x-reverse xl:space-x-6'>
								<div class="border-r border-gray-200/50"></div>
								<div class='flex flex-col items-center'>
									<div class="h-14 w-14 text-gray-300 mb-1.5">
										<slot name="iconDownLeft" />
									</div>
									<div class='text-gray-400 text-xxs uppercase font-normal'>{gLeads[2]}</div>
									<div class='flex flew-row justify-items-end space-x-1.5'>
										<div class='text-2xl font-bold text-fuchsia-700'>{gStatistics[2]}</div>
										<div class='text-2xl text-gray-400'>{gPercentuals[2]}</div>
									</div>
								</div>
							</div>
						</div>
						<!--<div class='border-b border-slate-900/90 w-32'></div>-->
					</div>

					<!--forth-square-->
					<div class='w-1/2'>
						<div class='flex items-center justify-start text-gray-900 h-32'>
							<div class='flex flex-row space-x-5 sm:space-x-7 md:space-x-7'>
								<div class="border-r border-gray-300/50"></div>
								<div class='flex flex-col items-center'>
									<div class="h-14 w-14 text-gray-300 mb-1.5">
										<slot name="iconDownRight" />
									</div>
									<div class='text-gray-400 text-xxs uppercase font-normal'>{gLeads[3]}</div>
									<div class='flex flew-row justify-items-end space-x-1.5'>
										<div class='text-2xl font-bold text-fuchsia-700'>{gStatistics[3]}</div>
										<div class='text-2xl text-gray-400'>{gPercentuals[3]}</div>
									</div>
								</div>
							</div>
						</div>
						<!--<div class='border-b border-slate-900/90 w-32'></div>-->
					</div>

				</div>
			</div>

		</div>
	</div>
</div>

<style>
	.text-xxs {
		font-size: 0.65rem;
		line-height: inherit;
	}
</style>
