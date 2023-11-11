<script lang="ts">
    import { onMount } from 'svelte';
    import ToggleButton from '$lib/ToggleButton.svelte';

    let useDarkMode = false;
    let bodyElem: HTMLElement | null = null;

    $: {
        if (useDarkMode) bodyElem?.classList.add('dark');
        else bodyElem?.classList.remove('dark');
        console.log({ useDarkMode });
    }

    onMount(() => {
        bodyElem = document.body;
    });
</script>

<div class="h-screen bg-background-100 dark:bg-background-900">
    <div class="absolute top-2 right-2 sm:top-3 sm:right-4">
        <ToggleButton
            id="themeToggler"
            iconOff="fa-sun"
            iconOn="fa-moon"
            bind:checked={useDarkMode} />
    </div>

    <section class="flex flex-col h-full justify-center items-center space-y-2">
        <h1
            class="font-heading text-7xl sm:text-8xl md:text-9xl text-primary-700 dark:text-primary-400">
            nearby
        </h1>

        <p
            class="font-body font-semibold text-base sm:text-lg md:text-xl text-foreground-900 dark:text-foreground-100">
            A new way to meet people
        </p>
    </section>
</div>
