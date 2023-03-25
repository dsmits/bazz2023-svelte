<script>
    import Description from './Description.svelte';
    import Levels from './Levels.svelte';
    import { base } from "$app/paths";
    import Concepts from "./Concepts.svelte";
</script>

<div class="hero min-h-screen" style="background-image: url({base}/save-the-date.png);">
    <div class="hero-overlay bg-transparent/0"></div>
</div>

<div>
    <Description/>
</div>
<div>
    <Levels/>
</div>
<div>
    <Concepts/>
</div>