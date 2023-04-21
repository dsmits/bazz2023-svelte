<script>
    import Description from './Description.svelte';
    import Levels from './Levels.svelte';
    import {base} from "$app/paths";
    import Concepts from "./Concepts.svelte";
    import Footer from "./Footer.svelte";
    import Register from "./Register.svelte";
    import Previous from "./Previous.svelte";


    let sections = [{"name": "Description", "component": Description},
        {"name": "Register", "component": Register},
        {"name": "Bazz Vibes", "component": Previous},
        {"name": "Levels", "component": Levels},
        {"name": "Concepts", "component": Concepts},
    ]

    for (let section of sections) {
        section.id = section.name.replace(" ", "-").toLowerCase();
    }

</script>

<div class="hero min-h-screen" style="background-image: url(./save-the-date.png);">
</div>
<div class="navbar bg-primary">
    <div class="navbar-start"></div>
    <div class="navbar-center">
        <ul class="menu menu-vertical lg:menu-horizontal items-center text-xl">
            {#each sections as section}
                <li><a href="#{section.id}">{section.name}</a></li>
            {/each}
        </ul>
    </div>
    <div class="navbar-end"></div>
</div>


<div class="container p-10  text-3xl max-w-prose">

    {#each sections as section}
        <div id="{section.id}" class="flex flex-col place-items-center">
            <svelte:component this={section.component}/>
        </div>
        <div class="divider"></div>
    {/each}

</div>

<Footer/>