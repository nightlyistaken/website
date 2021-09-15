<script>
	import Toggler from '$lib/components/ModeButton.svelte';
	import { fade } from 'svelte/transition';
	function funfactsLink() {
		window.location = '/funfacts';
	}
	function reportLink() {
		window.location = 'https://github.com/dhairy-online/my-blog-v3';
	}
</script>


<svelte:head>
	<title>breadA</title>
</svelte:head>

<main in:fade>
	<div class="jumbo">
		<h1>
			Hey there I'm breadA 👋 !
		</h1>
		<p>I'm developer currently making games for deno_sdl2.<br> I'm Intrested in learning new things and eating some
		really delicious food, Although I'm really thin 😐 My hobby is to watch some minecraft videos and
		help my mom especially in the morning. <br></p>
		<button on:click={funfactsLink}>Fun Facts</button>
		<button on:click={reportLink}>Report a issue</button>
	</div>
</main>

<style lang="scss">
	@import '../lib/styles/main.scss';
</style>
