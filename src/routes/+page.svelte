<script>
    import Description from './Description.svelte';
    import Levels from './Levels.svelte';
    import {base} from "$app/paths";
    import Concepts from "./Concepts.svelte";
    import Footer from "./Footer.svelte";
    import Register from "./Register.svelte";
    import Previous from "./Previous.svelte";
    import Prices from "./Prices.svelte";
    import Teachers from "./Teachers.svelte";
    import Schedules from "./Schedules.svelte";
    import Booklet from "./Booklet.svelte";
    import Bands from "./Musicians.svelte";


    let sections = [{"name": "Description", "component": Description},
        {"name": "Register", "component": Register},
        {"name": "Booklet", "component": Booklet},
        {"name": "Teachers", "component": Teachers},
        {"name": "Schedules", "component": Schedules},
        {"name": "Levels", "component": Levels},
        {"name": "Musicians", "component": Bands},
        {"name": "Concepts", "component": Concepts},
        {"name": "Prices", "component": Prices},
        {"name": "Bazz Vibes", "component": Previous},
    ]

    for (let section of sections) {
        section.id = section.name.replace(" ", "-").toLowerCase();
    }

</script>
<div>
    <img src="banner.png" class="min-w-full"/>
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