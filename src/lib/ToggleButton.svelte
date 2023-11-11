<script lang="ts">
    /**
     * Binding input id
     * @svelte-prop {}
     */
    export let id = '';
    export let iconOff = '';
    export let iconOn = '';
    /**
     * Binding input state
     * @svelte-prop {boolean} [checked]
     */
    export let checked = false;
</script>

<label for={id} class="flex items-center cursor-pointer select-none">
    <div class="relative">
        <input type="checkbox" {id} bind:checked class="peer sr-only" />
        <div class="block h-8 rounded-full bg-gray-700 dark:bg-gray-300 w-14" />
        <div
            class="absolute left-1 top-1 flex items-center justify-center w-6 h-6 rounded-full dot bg-white transition peer-checked:translate-x-full peer-checked:bg-black">
            <span class={checked ? 'hidden inactive' : 'active'}>
                <span class="fas {iconOff} text-accent-light w-4 h-4" />
            </span>
            <span class={checked ? 'active' : 'hidden inactive'}>
                <span class="fas {iconOn} text-accent-dark w-4 h-4" />
            </span>
        </div>
    </div>
</label>
