<script lang="ts">
	// @ts-nocheck
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>dhairy-online | Home</title>
</svelte:head>
<main in:fade>
	<div class="p-24">
		<h1 class="text-4xl font-bold pb-6">
			Hey there I'm <span class="font-extrabold text-purple-600">dhairy-online</span>
			👋 !
		</h1>
		<a
			href="https://github.com/dhairy-online/website/issues/new"
			class="btn btn-primary btn-sm normal-case text-sm rounded-lg shadow-lg hover:ring-1"
			>Report A Issue</a
		>
	</div>
</main>
