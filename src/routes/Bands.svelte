<script>
    import Carousel from "./Carousel.svelte";

    let items = [
        {
            "name": "Original Praque Syncopated Orchestra",
            "description": "OPSO is a Czech jazz band formed in Prague, in what was then Czechoslovakia, in 1974. It is best known for painstaking reconstructions of performances of music of the 1920s, using authentic instruments, and improvisation in the style of the time. On friday they will be accompanied by Sam Ghezzi on vocals.",
            "image": "bands/original_prague_syncopated_orchestra.jpeg"
        },
        {
            "name": "Gumbo Night Band",
            "description": "Gumbo Night has been the household name in Amsterdam's party scene for over a decade, playing tribute to the magical city of New Orleans: the birthplace of Jazz, Rhythm & Blues & Funk! Our Gumbo Night band Cats can play all of it! ;) effortlessly guiding us from one groove to another, what these boys will play next during their set remains the most fun guessing game! Get ready to be immersed in the celebration of New Orleans sounds, atmosphere, and yes, even the taste! Prepare your kicks, hops, skips, jumps, slaps, claps and be ready for a fiery party!",
            "image": "bands/gumbo_night_band.jpeg"
        },
        {
            "name": "Sachee",
            "description": "As BAZZ is also a music festival, we value diverse spectrum of music that intersect with Jazz. That's why we love the soulful sound of Sachee! " +
                "Sachee is not just a band. Sachee is an experience: eight unique artists that together put forth a " +
                "raucous yet perfectly coordinated ambiance. Sachee brings the vibes, and Sachee is the party. " +
                "A mix of creative genius, norm-breaking and shattering of expectations, Sachee captures ears " +
                "and opens eyes. Through the combination of different cultural and musical backgrounds, this " +
                "coming together of minds and vibes is utterly singular, and something to pay close attention to.",
            "image": "bands/sachee.jpeg"
        },
    ]
</script>
<article class="prose prose-xl">
    <h1 class="text-center">Musicians</h1>
<p></p>
</article>

<Carousel items="{items}" itemWidth="w-full"></Carousel>
