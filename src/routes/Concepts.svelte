<script>
    let descriptions = [
        {
            "name": "BAZZ Lab",
            "description": "BAZZ Lab is focused on a crossover between two different dance styles. One Jazz teacher, and one teacher of another dance style will be guiding these sessions together. Let's explore existing links between Jazz and its contemporary descendant dance styles, let's celebrate their similarities and differences! (Included in all class passes)"
        },
        {
            "name": "JAZZ Hub",
            "description": "JAZZ Hub session is totally focused on Jazz! In this session we will bring all our badass Jazz teachers together in the same room to share their diverse perspectives on many motives that create a Jazz landscape. With a goal to help you find your own truth within a Jazz universe, we will tackle topics like groove, improvisation, authenticity, culture, jamming etc. If you're wondering how this will look like, probably more like a party rather than a class ;)\n" +
                "(NOT included in any pass, you can sign up separately in registration form)"
        },
        {
            "name": "BAZZ Buzz",
            "description": "BAZZ Buzz is focused on YOU! This time will be dedicated to your own practice, where together with your BAZZ friends, you can go through whatever you learned throughout the weekend, or you can just jam ! In each BB session there will be a DJ & Teachers available for you to ask any questions, personal feedback or tips! You're not obliged to ask them anything, you can also just come and hang, listen to music & grab a drink :) (Included in all class passes)"
        }
    ]

    let backgrounds = ['border-primary', 'border-secondary', 'border-accent']

</script>
<div class="content-center text-center">
<h1>Our Concepts</h1>
</div>
    {#each descriptions as description, i}
<div class="p-2">
            <div class="card-bordered shadow-xl border-4 rounded-2xl {backgrounds[i%backgrounds.length]}">
                <div class="card-body">
                    <h2 class="card-title">
                        {description.name}
                    </h2>
                    <p>{description.description} </p>

                </div>
            </div>
</div>
    {/each}
