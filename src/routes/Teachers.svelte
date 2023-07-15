<script>
    let teachers = [{
        "name": "Helena Kanini Kiiru",
        "description": "Helena Kanini Kiiru is a young dancer and teacher from Zagreb, Croatia, currently based in Amsterdam. Her enthusiasm for music and dancing has been evident since her childhood when she showed great talent for playing piano at the age of 7. Having Kenyan roots in her family, Helena has always been exposed to African music, which stimulated her sensibility for the rhythm. Very soon she started developing interest towards dances like Hip Hop and Dancehall. After 8 years of exploring various Street dance styles, she saw African American Jazz dancing and immediately felt that it speaks to her on a very deep level. Helena feels that Jazz created an opportunity for her to meet and express all the deep parts of herself that made her expand and grow. Currently based in Amsterdam, she continues to teach locally, internationally and online.\n" +
            "She has been teaching all over the Europe as well as Houston, Seoul, Bangkok." +
            "She endlessly continues to fuel her inspiration with various other dance styles. Her huge wish is to connect Jazz and Street dance communities and bring this dance to street jams and clubs!",
        "image": "helena.png"
    },
        {
            "name": "Helena Kanini Kiiru",
            "description": "Helena Kanini Kiiru is a young dancer and teacher from Zagreb, Croatia, currently based in Amsterdam. Her enthusiasm for music and dancing has been evident since her childhood when she showed great talent for playing piano at the age of 7. Having Kenyan roots in her family, Helena has always been exposed to African music, which stimulated her sensibility for the rhythm. Very soon she started developing interest towards dances like Hip Hop and Dancehall. After 8 years of exploring various Street dance styles, she saw African American Jazz dancing and immediately felt that it speaks to her on a very deep level. Helena feels that Jazz created an opportunity for her to meet and express all the deep parts of herself that made her expand and grow. Currently based in Amsterdam, she continues to teach locally, internationally and online.\n" +
                "She has been teaching all over the Europe as well as Houston, Seoul, Bangkok." +
                "She endlessly continues to fuel her inspiration with various other dance styles. Her huge wish is to connect Jazz and Street dance communities and bring this dance to street jams and clubs!",
            "image": "helena.png"
        }

    ]
</script>
<article class="prose prose-xl">
    <h1 class="text-center">Teachers</h1>

</article>
<div class="carousel rounded-box">
{#each teachers as teacher, i}

    <div id="slide-{i}" class="carousel-item">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="{teacher.image}" alt="{teacher.name}" /></figure>
            <div class="card-body">
                <h2 class="card-title">{teacher.name}</h2>
                <p>{teacher.description}</p>

            </div>
        </div>

        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {#if i <= 0}
                <a href="#slide-{teachers.length-1}" class="btn btn-circle">❮</a>
                {:else }
            <a href="#slide-{(i-1) % teachers.length}" class="btn btn-circle">❮</a>
                {/if}


            <a href="#slide-{(i+1) % teachers.length}" class="btn btn-circle">❯</a>

        </div>
    </div>


{/each}
</div>
