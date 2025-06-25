<script>
    import { allCocktails } from "$lib/constants";
    import gsap from "gsap";

    let currentIndex = $state(0);

    $effect(() => {
        currentIndex; // Trigger reactivity when currentIndex changes

        const ctx = gsap.context(() => {
            gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
            gsap.fromTo('.cocktail img', {opacity: 0, xPercent: -100}, {
                xPercent: 0,
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut'
            })
            gsap.fromTo('.details h2, .details p', {yPercent: 100, opacity: 0}, {
                yPercent: 0,
                opacity: 1,
                ease: 'power1.inOut', 
            })
        });

        return () => ctx.revert();
    });

    const totalCocktails = allCocktails.length;

    /**
     * Goto a specific slide in the cocktail menu.
     * @param {number} index
     *
     * @return {void}
     */
    const goToSlide = (index) => {
        currentIndex = (index + totalCocktails) % totalCocktails;
    };

    /**
     * Get the cocktail at a specific index offset from the current index.
     * @param {number} indexOffset
     *
     * @return {typeof allCocktails[number]} cocktail
     */
    const getCocktailAt = (indexOffset) => {
        return allCocktails[
            (currentIndex + indexOffset + totalCocktails) % totalCocktails
        ];
    };

    const currentCocktail = $derived(getCocktailAt(0));
    const prevCocktail = $derived(getCocktailAt(-1));
    const nextCocktail = $derived(getCocktailAt(1));
</script>

<section id="menu" aria-labelledby="menu-heading">
    <img src="/images/slider-left-leaf.png" alt="left leaf" id="m-left-leaf" />
    <img
        src="/images/slider-right-leaf.png"
        alt="right leaf"
        id="m-right-leaf"
    />

    <h2 id="menu-heading" class="sr-only">Cocktail Menu</h2>

    <nav class="cocktail-tabs" aria-label="Cocktail Navigation">
        {#each allCocktails as cocktail, index (cocktail.id)}
            <button
                class={`${index === currentIndex ? "text-white border-white" : "text-white/50 border-white/50"}`}
                onclick={() => goToSlide(index)}
            >
                {cocktail.name}
            </button>
        {/each}
    </nav>

    <div class="content">
        <div class="arrows">
            <button
                class="text-left"
                onclick={() => goToSlide(currentIndex - 1)}
            >
                <span>{prevCocktail.name}</span>
                <img
                    src="/images/right-arrow.png"
                    alt="right arrow"
                    aria-hidden="true"
                />
            </button>

            <button
                class="text-left"
                onclick={() => goToSlide(currentIndex + 1)}
            >
                <span>{nextCocktail.name}</span>
                <img
                    src="/images/left-arrow.png"
                    alt="left arrow"
                    aria-hidden="true"
                />
            </button>
        </div>

        <div class="cocktail">
            <img
                src={currentCocktail.image}
                class="object-contain"
                alt={currentCocktail.name}
            />
        </div>

        <div class="recipe">
            <div class="info">
                <p>Recipe for:</p>
                <p id="title">{currentCocktail.name}</p>
            </div>

            <div class="details">
                <h2>{currentCocktail.title}</h2>
                <p>{currentCocktail.description}</p>
            </div>
        </div>
    </div>
</section>
