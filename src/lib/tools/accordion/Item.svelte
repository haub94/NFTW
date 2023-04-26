<script lang="ts">
    import { getContext } from 'svelte'
    import { slide } from "svelte/transition";
   
    export let id: string = "id";
    export let title: string = "title";

    let isHovered = false;
    let isFocused = false;
    const active: any = getContext("context");
    $: isCurrentActive = $active === id;
   
    const onClickHandler = () => {
        if (isCurrentActive) {
            $active = null;
        }
        else {
            $active = id;
        }
    }
</script>

<div class="divide-y divide-gray-200 rounded-sm border border-gray-200">
    <button
            on:click={onClickHandler}
            on:mouseenter={() => isHovered = true}
            on:mouseleave={() => isHovered = false}
            on:focus={() => isFocused = true}
            on:blur={() => isFocused = false}
            class="flex text-left w-full focus:outline-none items-center p-4" class:bg-gray-50={isHovered || isFocused}>
        <div class="w-full">
            <div class="
                font-bold
                transition
                text-gray-500
            "
                 class:text-indigo-600={isHovered || isFocused}>
                <span class="mt-3 text-lg font-semibold tracking-tight text-gray-900"
                      class:border-opacity-50={isFocused}
                      class:border-blue-300={isFocused}>
                    {title}
                </span>
            </div>
        </div>

        <div class="text-xl transform transition text-gray-900"
             class:rotate-180={isCurrentActive}
             class:text-indigo-600={isHovered || isFocused}>
             &#9662;
        </div>
    </button>

    {#if isCurrentActive}
        <div class="p-4 text-base text-gray-500"
             transition:slide>
            <slot/>
        </div>
    {/if}
</div>