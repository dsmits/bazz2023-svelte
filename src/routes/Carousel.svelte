<script>
    import CarouselItem from './CarouselItem.svelte';
    export let itemWidth = "w-96"
    export let items;
    export let name;
</script>

<div class="carousel w-full rounded-box">
    {#each items as item, i}
        <CarouselItem id="slide-{name}-{i}" name="{item.name}" image="{item.image}" description="{item.description}"
                      width="{itemWidth}"></CarouselItem>
    {/each}

</div>
<div class="flex justify-center w-full py-2 gap-2">
    {#each items as item, i}
        <a href="#slide-{name}-{i}" class="btn btn-xs">{i + 1}</a>
    {/each}
</div>