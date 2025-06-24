<script>
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { SplitText } from 'gsap/SplitText';
	
	import '../app.css';
	
	let { children } = $props();

	gsap.registerPlugin(ScrollTrigger, SplitText);
</script>

{@render children()}
