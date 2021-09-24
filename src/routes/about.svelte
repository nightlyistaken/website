<script lang="ts">
	// @ts-nocheck
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>dhairy-online | About</title>
</svelte:head>
<main in:fade>
	<div class="p-24">
		<h1 class="text-4xl font-bold pb-6">About Me!</h1>
		<p class="text-sm font-thin pb-6">
			I'm developer currently making games for deno_sdl2.<br /> I'm Intrested in learning new things
			and eating some really delicious food, Although I'm really thin 😐. <br />My hobby is to watch
			some minecraft videos and help my mom especially in the morning. I gotta complete this website
			LOL!
		</p>
		<a
			href="https://github.com/dhairy-online/website/issues/new"
			class="btn btn-primary btn-sm normal-case text-sm rounded-lg shadow-lg hover:ring-1"
			>Report A Issue</a
		>
	</div>
</main>
