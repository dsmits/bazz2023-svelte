<script>
    import Carousel from "./Carousel.svelte";

    let teachers = [
        {
            "name": "Remy Kouakou Kouame",
            "description": "Remy Kouakou Kouame is an established dancer and performer travelling all over the world to share his passion for Jazz Dance. Remy’s approach to the dance is unique and original. As a teacher he promotes creativity and individuality. At Jam Factory Remy will teach Solo Jazz and Lindy Hop. His energy will take all of us by storm.",
            "image": "remy.png"
        },
        {
            "name": "Helena Kanini Kiiru",
            "description": "Hey, my name is Kanini, and I'm an Old School Jazz/Swing dancer, teacher and performer. Everyone knows me by the name Helena, but in the spirit of this festival, I want to honour my Kenyan roots.\n" +
                "\n" +
                "My favorite dance definitely is The Charleston!💕 The music, the joy and ecstasy of this African American dance for me is a spiritual experience! I feel like I get to express some very deep parts of myself that I'm usually shy to express in everyday life. This dance continually helps me to embrace myself, and to recognize the beauty of abundant African-Diasporic life, rhythm and movement.\n" +
                "At BAZZ I'll be teaching Old School Jazz workshops and will be DJing 😁\n" +
                "\n" +
                "As I've been both part of the Club Dance and Swing dance community, for me it's quite obvious that these worlds belong together, and I'm very passionate about envisioning that possibility😍 I feel very privileged to be a part of a movement that wants to revitalize those ever present links through experience, roots and connects dancers back together.\n",
            "image": "helena.png"
        },
        {
            "name": "Sabou",
            "description": "My name is Sabrine, and I’m a professional and certified teacher, dancer and choreographer, specialising in street Afro dances.\n" +
                "\n" +
                "I fell in love with street Afro dances whilst in Finland (from all the places!), and became obsessed; taking as many classes and workshops as I could (and still do!), to deepen my knowledge, understand the meaning of the dance, the music, and the overall meaning behind each and every step, foundation, technique… It became key to my appreciation of the culture. Nowadays, I spend most of my time training, teaching, connecting, and sharing the love I have for this culture with the community here in Holland.\n" +
                "\n" +
                "Dance has helped me overcome lots of life challenges and especially build a greater confidence around myself, my values, and most importantly, improve the relationship I have with my body. It’s been the greatest school of life so far; that’s why I’ve decided to gather all my knowledge and experiences to help you fall in love with (all of) yourself (again), gain more confidence and self-esteem, and help you become an even better human being.\n" +
                "\n" +
                "Today, I’ve decided to gather my knowledge and experiences to help you find, embrace, cherish and appreciate the uniqueness of your dance, feel more empowered to be who you are and express yourself with confidence through the language of dance.\n" +
                "\n" +
                "Regardless of where you come from or you experience, it’s all about the feeling, opening up to yourself, to others, and feeling brave enough to share your story.\n" +
                "\n" +
                "I’m so looking forward to be dancing with you!\n",
            "image": "sabou.png"
        },
        {
            "name": "Popping Danys",
            "description": "Hi everybody, Danys Vanderhaeghen aka Popping Danys from Belgium! 🇧🇪 I am a dancer, choreographer and artistic director specialized in what we call here in Europe \"Funkstyles\", which is a package of several dance styles : Popping, Locking and Whacking. It is hard to tell which dance style is my favourite as I am specialized in Popping, Locking and Whacking, and these three nurture me in their own way on a daily basis! But I am anyway super excited to share with you all and explore the connections (trust me, there are a lot) between Swing styles and Funk/disco styles! It's gonna be social, it's gonna be deep, it's gonna be funky 🔥 See you all at Bazz!",
            "image": "danys.png"
        },


        {
            "name": "Joyss",
            "description": "Hey, my name is Jean-Charles ZAMBO. I am a French actor, but I share a big love story with Dance. " +
                "Everybody in the dance scene, knows me as Joyss, which is a surname that I got from my early years as a hiphop dancer cause I was always smiling all the time, even in battle. " +
                "Then during my evolution, I felt in love with swing dances, solo Jazz especially!! " +
                "Since then I try to accomplish myself and share my experience as a performer and teacher all around the world. " +
                "I could talk about the famous people I had the chance to work with or the world class competitions I won, but this is not what I am the most proud of. " +
                "The amount of different people I met on the dance floor is definitely what I cherish the most. " +
                "Like I love to say, anything you pursue, forget the goal! You gotta enjoy the adventure!",
            "image": "joyss.png"
        },


    ]
</script>
<article class="prose prose-xl">
    <h1 class="text-center">Teachers</h1>

</article>

<Carousel items="{teachers}"></Carousel>