<script>
    import { cocktailLists, mockTailLists } from "$lib/constants";
    import gsap from "gsap";
    import { onMount } from "svelte";

    onMount(() => {
        const ctx = gsap.context(() => {
            const parallaxTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#cocktails",
                    start: "top 30%",
                    end: "bottom 80%",
                    scrub: true,
                },
            });

            parallaxTimeline
                .from("#c-left-leaf", {
                    x: -100,
                    y: 100,
                })
                .from("#c-right-leaf", {
                    x: 100,
                    y: 100,
                });
        });

        return () => ctx.revert();
    });
</script>

<section id="cocktails" class="noisy">
    <img
        src="/images/cocktail-left-leaf.png"
        alt="left leaf"
        id="c-left-leaf"
    />
    <img
        src="/images/cocktail-right-leaf.png"
        alt="right leaf"
        id="c-right-leaf"
    />

    <div class="list">
        <div class="popular">
            <h2>Most popular cocktails:</h2>

            <ul>
                {#each cocktailLists as drink (drink.name)}
                    <li>
                        <div class="md:me-28">
                            <h3>{drink.name}</h3>
                            <p>{drink.country} | {drink.detail}</p>
                        </div>
                        <span>- {drink.price}</span>
                    </li>
                {/each}
            </ul>
        </div>

        <div class="loved">
            <h2>Most loved mocktails:</h2>

            <ul>
                {#each mockTailLists as drink (drink.name)}
                    <li>
                        <div class="me-28">
                            <h3>{drink.name}</h3>
                            <p>{drink.country} | {drink.detail}</p>
                        </div>
                        <span>- {drink.price}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</section>
