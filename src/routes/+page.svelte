<script>
    import Description from './Description.svelte';
    import Levels from './Levels.svelte';
    import { base } from "$app/paths";
    import Concepts from "./Concepts.svelte";
    import Footer from "./Footer.svelte";

    let sections = [Description, Levels, Concepts]

</script>


<div class="hero min-h-screen" style="background-image: url({base}/save-the-date.png);">
    <div class="hero-overlay bg-transparent/0"></div>
</div>
<div class="text-2xl">
<div class="md:container md:mx-auto p-2">
    {#each sections as section}
        <div class="flex flex-col place-items-center">

                <svelte:component this={section} />

        </div>
        <div class="divider"></div>
    {/each}
</div>
</div>
<Footer/>