<script>
    import "../app.css";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { SplitText } from "gsap/SplitText";
    import {CSSPlugin} from "gsap/CSSPlugin"

    gsap.registerPlugin(ScrollTrigger, SplitText, CSSPlugin);

    let { children } = $props();
</script>

{@render children()}
