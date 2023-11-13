<script lang="ts">
    import IconSunFill from '~icons/ph/sun-fill';
    import IconMoon from '~icons/ion/moon';
    import ToggleButton from '$lib/ToggleButton.svelte';

    let useDarkMode = false;
</script>

<div class="w-screen h-screen {useDarkMode ? 'dark' : ''}">
    <div class="w-full h-full bg-background-100 dark:bg-background-900">
        <div class="absolute top-2 right-2 sm:top-3 sm:right-4">
            <ToggleButton id="themeToggler" bind:checked={useDarkMode}>
                <IconSunFill slot="iconOff" />
                <IconMoon slot="iconOn" />
            </ToggleButton>
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
</div>
