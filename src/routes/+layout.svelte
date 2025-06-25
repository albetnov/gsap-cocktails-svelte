<script>
    import "../app.css";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { SplitText } from "gsap/SplitText";

    gsap.registerPlugin(ScrollTrigger, SplitText);

    let { children } = $props();
</script>

{@render children()}
