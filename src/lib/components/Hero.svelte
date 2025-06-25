<script>
    import { isMediaQueryMatch } from "$lib";
    import gsap from "gsap";
    import { SplitText } from "gsap/SplitText";
    import { onMount } from "svelte";

    /**
     * @type {HTMLVideoElement}
     */
    let videoRef;

    const isMobile = isMediaQueryMatch("(max-width: 767px)");

    onMount(() => {
        const ctx = gsap.context(() => {
            const heroSplit = new SplitText(".title", { type: "chars, words" });
            const paragraphSplit = new SplitText(".subtitle", {
                type: "lines",
            });

            for (const char of heroSplit.chars) {
                char.classList.add("text-gradient");
            }

            gsap.from(heroSplit.chars, {
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.06,
            });

            gsap.from(paragraphSplit.lines, {
                opacity: 0,
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.06,
                delay: 1,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })
                .to(
                    ".right-leaf",
                    {
                        y: 200,
                    },
                    0,
                )
                .to(
                    ".left-leaf",
                    {
                        y: -200,
                    },
                    0,
                );

            const startValue = isMobile ? 'top 50%': 'center 60%'
            const endValue = isMobile ? '120% top': 'bottom top'

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: 'video',
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    pin: true,
                }
            })

            videoRef.onloadedmetadata = () => {
                tl.to(videoRef, {
                    currentTime: videoRef.duration,
                })
            }
        });

        return () => ctx.revert();
    });
</script>

<section id="hero" class="noisy">
    <h1 class="title">MOJITO</h1>

    <img src="/images/hero-left-leaf.png" alt="left leaf" class="left-leaf" />

    <img
        src="/images/hero-right-leaf.png"
        alt="right leaf"
        class="right-leaf"
    />

    <div class="body">
        <div class="content">
            <div class="space-y-5 hidden md:block">
                <p>Cool. Crisp. Classic.</p>
                <p class="subtitle">
                    Sip the spirit <br /> of Summer
                </p>
            </div>

            <div class="view-cocktails">
                <p class="subtitle">
                    Every cocktail on our menu is a blend of premium
                    ingredients, creative flair, and timeless recipes — designed
                    to delight your senses.
                </p>

                <a href="#cocktails">View Cocktails</a>
            </div>
        </div>
    </div>
</section>

<div class="video absolute inset-0">
    <video
        bind:this={videoRef}
        src="/videos/output.mp4"
        muted
        playsinline
        preload="auto"
    ></video>
</div>
