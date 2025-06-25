<script>
    import { openingHours, socials } from "$lib/constants";
    import gsap from "gsap";
    import { SplitText } from "gsap/SplitText";
    import { onMount } from "svelte";

    onMount(() => {
        const ctx = gsap.context(() => {
            const titleSplit = SplitText.create("#contact h2", {
                type: "words",
            });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top center",
                },
                ease: "power1.inOut",
            });

            timeline
                .from(titleSplit.words, {
                    opacity: 0,
                    yPercent: 100,
                    stagger: 0.02,
                })
                .from("#contact h3, #contact p", {
                    opacity: 0,
                    yPercent: 100,
                    stagger: 0.02,
                }).to('#f-right-leaf, #f-left-leaf', {
                    y: '-50',
                    duration: 1,
                    ease: 'power1.inOut',
                });
        });

        return () => ctx.revert();
    });
</script>

<footer id="contact">
    <img
        src="/images/footer-right-leaf.png"
        alt="right leaf"
        id="f-right-leaf"
    />
    <img src="/images/footer-left-leaf.png" alt="left leaf" id="f-left-leaf" />

    <div class="content">
        <h2>Where to Find Us</h2>

        <div>
            <h3>Visit Our Bar</h3>
            <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
            <h3>Contact Us</h3>
            <p>(555) 987-6543</p>
            <p>hello@jsmcocktail.com</p>
        </div>

        <div>
            <h3>Open Every Day</h3>
            {#each openingHours as time (time.day)}
                <p>
                    {time.day} : {time.time}
                </p>
            {/each}
        </div>

        <div>
            <h3>Socials</h3>

            <div class="flex-center gap-5">
                {#each socials as social (social.name)}
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                    >
                        <img src={social.icon} alt={social.name} />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</footer>
