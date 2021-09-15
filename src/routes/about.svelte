<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>About me</title>
</svelte:head>

 <main in:fade>
	<div class="jumbo">
		<h1>
			This is about me page.
		</h1>
		<p>Oh! Hello noobs Im spped lol haha
			This page is responsive too!
		HAHA lets goooooo</p>
		<button>Fun Facts</button>
		<button>Report a issue</button>
	</div>
</main>

<style lang="scss">
	@import '../lib/styles/main.scss';
</style>
