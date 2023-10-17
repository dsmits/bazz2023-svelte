<script>
    export let image;
    export let name;
    export let description;
    export let width;
    export let id = undefined;
</script>

<div id="{id}" class="carousel-item {width}">
    <div class="card card-compact bg-base-100 shadow-xl">
        <figure><img src="{image}" alt="{name}"/></figure>
        <div class="card-body">
            <article class="prose prose-xl">
                <h2>{name}</h2>
                <p></p>
            </article>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-200">

                <div class="collapse-title text-xl font-medium">
                    More info
                </div>
                <div class="collapse-content">
                    <article class="prose prose-xl">
                        <p>{description}</p>
                    </article>
                </div>

            </div>

        </div>
    </div>

</div>