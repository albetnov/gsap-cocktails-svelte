<script>
    import { navLinks } from "$lib/constants";
    import gsap from "gsap";
    import { onMount } from "svelte";

    onMount(() => {
        const ctx = gsap.context(() => {
            const navTween = gsap.timeline({
                scrollTrigger: {
                    trigger: "nav",
                    start: "bottom top",
                },
            });

            navTween.fromTo(
                "nav",
                {
                    backgroundColor: "transparent",
                },
                {
                    backgroundColor: "#00000050",
                    backgroundFilter: "blur(10px)",
                    duration: 1,
                    ease: "power1.inOut",
                },
            );
        });

        return () => ctx.revert();
    });
</script>

<nav>
    <div>
        <a href="#home" class="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" />
            <p>Velvet Pour</p>
        </a>

        <ul>
            {#each navLinks as nav (nav.id)}
                <li>
                    <a href="#{nav.id}" class="flex items-center gap-2">
                        <p>{nav.title}</p>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
