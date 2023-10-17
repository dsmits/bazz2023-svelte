<script>
    export let id;
    export let image;
    export let name;
    export let description;
    export let width;
</script>

<div id="{id}" class="carousel-item">
    <div class="card card-compact {width} bg-base-100 shadow-xl">
        <figure><img src="{image}" alt="{name}"/></figure>
        <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-200">

                <div class="collapse-title text-xl font-medium">
                    More info
                </div>
                <div class="collapse-content">
                    <p>{description}</p>
                </div>

            </div>
        </div>
    </div>

</div>