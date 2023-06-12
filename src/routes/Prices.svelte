<script>
  let products = [
    {
      name: "FULL PASS",
      content: [
        "3 Parties",
        "7,5h of Solo Social & Club dance styles",
        "1,5h BAZZ Lab",
        "2h BAZZ Buzz",
      ],
      price: [

        "Regular price 190pp",
      ],
    },
    {
      name: "CHILLAX PASS",
      content: [
        "3 Parties",
        "2h of Solo Authentic Jazz",
        "1,5h of BAZZ Lab",
        "2h BAZZ Buzz",
      ],
      price: [

        " Regular price €140pp",
      ],
    },
    {
      name: "JAZZ Hub session (optional, not included in any pass)",
      content: ["1,5h with ALL Jazz teachers"],
      price: ["€10pp"],
    },
    {
      name: "PARTY PASS",
      content: ["3 parties with variety of Live Jazz & DJ music"],
      price: ["€80pp"],
    },
    {
      name: "BAZZ Pre Party (Thursday night)",
      content: [],

      price: ["€15pp"],
    },
    {
      name: "BAZZ T-SHIRT (design by Helena)",
      content: "",
      price: ["€25"],
    },
    {
      name: "Lunch pack",
      content: ["Saturday lunch", "Sunday lunch"],
      price: ["€18"],
    },
    {
      name: "Single dinner",
      content: ["One dinner on Friday OR Saturday OR Sunday"],
      price: ["€15"],
    },
    {
      name: "Full food package",
      content: ["2 lunches", "3 dinners"],
      price: ["€55"],
    },
  ];
</script>

<article class="prose-2xl">
  <h1 class="text-center">Prices</h1>

  <div class="bg-transparent/50 rounded-2xl p-4">
    <div class="border-accent uppercase">
      <div class="flex">
        <div class="w-full sm:w-1/3 font-bold p-2">Package</div>
        <div class="w-full sm:w-1/3 font-bold p-2">Content</div>
        <div class="w-full sm:w-1/3 font-bold p-2">Price</div>
      </div>
    </div>

    <div class="border-secondary p-3">
      {#each products as product}
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/3 text-accent font-extrabold p-2">
            {product.name}
          </div>
          <div class="w-full sm:w-1/3 p-2">
            <ul>
              {#each product.content as item}
                <li>{item}</li>
              {/each}
            </ul>
          </div>
          <div class="w-full sm:w-1/3 p-2">
            <ul>
              {#each product.price as p}
                <li>{p}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <h2>SOLIDARITY FUND</h2>
  <p>
    Many people in the world can't attend such events. We would like to help
    them out and need your help for that! Please donate the amount that you can
    miss from your budget. The collected funds will be used for covering full
    passes for such people. If you are having financial problems and want to
    participate, please reach out and let's chat, we are sure together we can
    figure it out!
  </p>
</article>

<style>
  ul {
    list-style-type: square;
  }
</style>
