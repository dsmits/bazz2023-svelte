<script>
    let schedules = [
        {
            "name": "General",
            "id": "general"
        },
        {
            "name": "Parties",
            "id": "parties"
        },
        {
            "name": "Chillax",
            "id": "chillax"
        },
        {
            "name": "Kickass",
            "id": "kickass"
        },
        {
            "name": "Bazz Pro",
            "id": "bazz_pro"
        },

    ]
</script>
<article class="prose prose-xl">
    <h1 class="text-center">Schedules</h1>

</article>
<div class="gap-8 columns-2 py-8">
    {#each schedules as schedule}
        <div class="py-4 bg-transparent">

            <a href="schedules/{schedule.id}.png" ><img src="schedules/{schedule.id}.png" alt="{schedule.name} schedule"></a>
        </div>
    {/each}
</div>