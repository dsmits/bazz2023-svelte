<script>
    let descriptions = [
        {
            "name": "BAZZ Lab",
            "description": "BAZZ Lab is focused on a crossover between two different dance styles. One Jazz teacher, and one teacher of another dance style will be guiding these sessions together. Let's explore existing links between Jazz and its contemporary descendant dance styles, let's celebrate their similarities and differences! (Included in all class passes)",
            "image": "BAZZ LAB.jpg"
        },
        {
            "name": "JAZZ Hub",
            "description": "JAZZ Hub session is totally focused on Jazz! In this session we will bring all our badass Jazz teachers together in the same room to share their diverse perspectives on many motives that create a Jazz landscape. With a goal to help you find your own truth within a Jazz universe, we will tackle topics like groove, improvisation, authenticity, culture, jamming etc. If you're wondering how this will look like, probably more like a party rather than a class ;)\n" +
                "(NOT included in any pass, you can sign up separately in registration form)",
            "image": "JAZZ HUB.jpg"
        },
        {
            "name": "BAZZ Buzz",
            "description": "BAZZ Buzz is focused on YOU! This time will be dedicated to your own practice, where together with your BAZZ friends, you can go through whatever you learned throughout the weekend, or you can just jam ! In each BB session there will be a DJ & Teachers available for you to ask any questions, personal feedback or tips! You're not obliged to ask them anything, you can also just come and hang, listen to music & grab a drink :) (Included in all class passes)",
            "image": "BAZZ BUZZ.jpg"
        }
    ]

    let backgrounds = ['border-primary', 'border-secondary', 'border-accent']

</script>
<article class="prose prose-xl max-w-none">

<h1 class="text-center">Our Concepts</h1>

</article>

    {#each descriptions as description, i}
        <div class="py-10 px-5 max-w-3xl">
            <div class="card card-bordered border-8 shadow-xl rounded-2xl h-[50rem]  {backgrounds[i%backgrounds.length]}">
                <figure ><img class="rounded" src="{description.image}"/></figure>
                <div class="card-body">
                    <article class="prose prose-xl">
                    <h2 class="card-title">
                        {description.name}
                    </h2>
                    <p>{description.description} </p>
                    </article>
                </div>

            </div>
        </div>
    {/each}
