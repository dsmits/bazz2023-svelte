<script>
    let descriptions = [
        {
            'title': 'KICK ASS',
            'description': 'KICK ASS is recommended for INT/INT+. You\'re comfortable with weight shifts and moving through space. You\'re familiar with most of the basic vocabulary, but some pieces are missing. You\'re still searching to expand your knowledge on basics, transitions and body awareness. You need more guidance around improvisation and generally throughout the class, but you\'re ready to push yourself outside of your comfort zone and finish the weekend like a Bad Ass.',
            'image': 'KICK ASS.jpg'
        },
        {
            'title': 'BAZZ PRO',
            'description': 'BAZZ PRO is recommended for ADV/ADV+ dancers with good body awareness, body control, and fluent improvisation skills, who want to challenge their current limits. You easily follow combinations, you\'re enthusiastic about exploring intricate rhythms, techniques and movement in greater depth, while adding your own voice to it. You\'re comfortable with a faster pace of learning, you\'re fluent in improvisation but want to level it up like pro!\n',
            'image': 'BAZZ PRO.jpg'
        },
        {
            'title': 'CHILLAX',
            'description': 'CHILLAX Pass is for everyone who wants a taste of BAZZ Vibes, but still wants to have enough time to explore Amsterdam and relax during the day. This group will have an easy going schedule with less number of classes than a full pass, scheduled in the afternoon. It will be an OPEN level, which means approachable to a wide range of dance experience.\n',
            'image': 'CHILLAX.jpg'
        }
    ]
    let backgrounds = ['primary', 'secondary', 'accent']
</script>
<article class="prose prose-xl">
    <h1 class="text-center">Levels</h1>
    <p>
        Note for enthusiastic & passionate learners:
        KICK ASS level & KICK ASS PRO are oriented towards enthusiastic dancers and passionate learners that want a
        total
        immersion of various Social and Club dance styles throughout this weekend! These levels are available only
        within a
        FULL PASS package
    </p>
</article>

{#each descriptions as description, i}
<div class="py-10">
        <div class="card max-w-none shadow-xl card-normal max-h-full bg-{backgrounds[i%backgrounds.length]}">
            <figure><img src="{description.image}" alt="{description.title}"/></figure>
            <div class="card-body overflow-hidden">
                <article class="prose prose-xl text-{backgrounds[i%backgrounds.length]}-content">
                <h2 class="card-title text-{backgrounds[i%backgrounds.length]}-content">
                    {description.title}
                </h2>
                <p>{description.description} </p>
                </article>
            </div>
        </div>
</div>
{/each}
