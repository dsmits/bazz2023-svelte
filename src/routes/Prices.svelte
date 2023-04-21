<script>
    let products = [
        {
            "name": "FULL PASS",
            "content": ["3 Parties", "7,5h of Solo Social & Club dance styles", "1,5h BAZZ Lab", "2h BAZZ Buzz"],
            "price": ["Early bird EUR 170pp (payment needs to be in before 15th of May) ", "Regular price 190pp"]
        },
        {
            "name":
                "CHILLAX PASS",
            "content": ["3 Parties", "2h of Solo Authentic Jazz", "1,5h of BAZZ Lab", "2h BAZZ Buzz"],
            "price":
                ["Early bird EUR 120pp (payment needs to be in before 15th of May)", " Regular price EUR 140pp"]
        }
        ,
        {
            "name":
                "JAZZ Hub session (optional, not included in any pass)",
            "content": ["1,5h with ALL Jazz teachers"],
            "price": ["EUR 10pp"]
        }
        ,
        {
            "name":
                "PARTY PASS",
            "content":
                ["3 parties with variety of Live Jazz & DJ music"],
            "price":
                ["EUR 80pp"]
        }
        ,
        {
            "name":
                "BAZZ Pre Party (Thursday night)",
            "content": [],

            "price":
                ["EUR 15pp"]
        }
        ,
        {
            "name":
                "BAZZ T-SHIRT (design by Helena)",
            "content":
                "",
            "price":
                ["EUR 25"]
        }
        ,
        {
            "name":
                "Lunch pack",
            "content":
                ["Saturday lunch", "Sunday lunch"],
            "price":
                ["EUR 18"]
        },
        {
            "name":
                "Single dinner",
            "content":
                ["One dinner on Friday OR Saturday OR Sunday"],
            "price":
                ["EUR 15"]
        },
        {
            "name":
                "Full food package",
            "content":
                ["2 lunches", "3 dinners"],
            "price":
                ["EUR 55"]
        }

    ]

</script>
<style>
    td, th {
        padding: 20px;
    }
</style>

<article class="prose prose-2xl">
    <h1 class="text-center">Prices</h1>
    <h2 class="text-center">Early bird price available until 15th of May!</h2>

    <div class="w-screen overflow-x-scroll">

        <table class="bg-transparent/50 overflow-x-scroll">
        <thead class="border-accent uppercase ">
        <tr>
            <th>Product</th>
            <th>Content</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody class="border-secondary">
        {#each products as product}
            <tr>
                <td class="text-accent font-extrabold">{product.name}</td>
                <td>
                    <ul>
                        {#each product.content as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                </td>
                <td>
                    <ul>
                        {#each product.price as p}
                            <li>{p}</li>
                        {/each}
                    </ul>
                </td>
            </tr>
        {/each}

        </tbody>

    </table>
    </div>


    <h2>SOLIDARITY FUND</h2>
    <p>
        Many people in the world can't attend such events. We would like to help them out and need your help for that!
        Please donate the amount that you can miss from your budget. The collected funds will be used for covering full
        passes for such people. If you are having financial problems and want to participate, please reach out and let's
        chat, we are sure together we can figure it out!
    </p>

</article>