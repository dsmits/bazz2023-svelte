<script>
    let schedules = [
        {
            "name": "General",
            "id": "general",
            "image": "general.png"
        },
        {
            "name": "Parties",
            "id": "parties",
            "image": "parties.png"
        },
        {
            "name": "Chillax",
            "id": "chillax",
            "image": "chillax.jpeg"
        },
        {
            "name": "Kickass",
            "id": "kickass",
        "image": "kickass.png"

        },
        {
            "name": "Bazz Pro",
            "id": "bazz_pro",

        "image": "bazz_pro.png"
        },

    ]
</script>
<article class="prose prose-xl">
    <h1 class="text-center">Schedules</h1>

</article>
<div class="gap-8 columns-2 py-8">
    {#each schedules as schedule}
        <div class="py-4 bg-transparent">

            <a href="schedules/{schedule.id}.png" ><img src="schedules/{schedule.image}" alt="{schedule.name} schedule"></a>
        </div>
    {/each}
</div>