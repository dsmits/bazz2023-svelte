<script>
    let descriptions = [
        {'title': 'CHILLAX', 'description': 'CHILLAX Pass is for everyone who wants a taste of BAZZ Vibes, but still wants to have enough time to explore Amsterdam and relax during the day. This group will have an easy going schedule with less number of classes than a full pass, scheduled in the afternoon. It will be an OPEN level, which means approachable to a wide range of dance experience.\n'},
        {'title': 'KICK ASS', 'description': 'KICK ASS is recommended for INT/INT+. You\'re comfortable with weight shifts and moving through space. You\'re familiar with most of the basic vocabulary, but some pieces are missing. You\'re still searching to expand your knowledge on basics, transitions and body awareness. You need more guidance around improvisation and generally throughout the class, but you\'re ready to push yourself outside of your comfort zone and finish the weekend like a Bad Ass.'},
        {'title': 'BAZZ PRO', 'description': 'BAZZ PRO is recommended for ADV/ADV+ dancers with good body awareness, body control, and fluent improvisation skills, who want to challenge their current limits. You easily follow combinations, you\'re enthusiastic about exploring intricate rhythms, techniques and movement in greater depth, while adding your own voice to it. You\'re comfortable with a faster pace of learning, you\'re fluent in improvisation but want to level it up like pro!\n'},
            ]
    let backgrounds = ['bg-primary', 'bg-secondary', 'bg-accent']
</script>

<h1 class="text-center">LEVELS</h1>
<p>
Note for enthusiastic & passionate learners:
KICK ASS level & KICK ASS PRO are oriented towards enthusiastic dancers and passionate learners that want a total immersion of various Social and Club dance styles throughout this weekend! These levels are available only within a FULL PASS package
</p>

{#each descriptions as description, i}
    <div class="p-2">
<div class="card shadow-xl {backgrounds[i%backgrounds.length]}">
    <div class="card-body">
        <h2 class="card-title">
            {description.title}
        </h2>
        <p>{description.description} </p>

    </div></div>
    </div>
    {/each}