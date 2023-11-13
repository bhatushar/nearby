<script lang="ts">
    import IconO from '~icons/healthicons/o';
    import IconLetterI from '~icons/tabler/letter-i';
    /**
     * Unique component identifier
     * @svelte-prop {string}
     */
    export let id: string;
    /**
     * Bind input state
     * @svelte-prop {boolean}
     */
    export let checked = false;
</script>

<!-- 
    @component
    Toggle button component with support for custom on/off icons with slots `iconOn` and `iconOff`.
    @svelte-prop id {string}
    @svelte-prop checked {bool, optional}
 -->
<label for={id} class="flex items-center cursor-pointer select-none">
    <div class="relative">
        <input type="checkbox" {id} bind:checked class="peer sr-only" />
        <div class="block h-8 rounded-full bg-background-800 dark:bg-background-200 w-14" />
        <div
            class="absolute left-1 top-1 flex items-center justify-center w-6 h-6 rounded-full dot bg-white transition peer-checked:translate-x-full peer-checked:bg-black">
            <span class="{checked ? 'hidden inactive' : 'active'} p-1 text-accent-800">
                <slot name="iconOff">
                    <IconO />
                </slot>
            </span>
            <span class="{checked ? 'active' : 'hidden inactive'} text-accent-300">
                <slot name="iconOn">
                    <IconLetterI />
                </slot>
            </span>
        </div>
    </div>
</label>
