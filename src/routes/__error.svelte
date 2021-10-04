<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error: `${error.message}`,
				status: `${status}`
			}
		};
	}
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	export let error: string;
	export let status: string;
</script>

<div class="p-4 error" in:fade>
	<div class="hero container text-center">
		{#if status == '404'}
			<h1 class="text-4xl font-extrabold font-mono p-3">{status} not found.</h1>
			<p class="text-xl font-extrabold font-mono p-2">
				It seems you have found something that does not exist.
			</p>
		{:else}
			<h1 class="text-4xl font-extrabold font-mono">Internal Server Error: {status}</h1>
		{/if}
		<h4 class="text-xl font-extrabold font-mono text-red-500">{error}</h4>
	</div>
</div>
