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

<div class="jumbo error" in:fade>
	{#if status == 404}
		<h1>{status} not found.</h1>
		<p>It seems you have found something that does not exist.</p>
	{:else}
		<h1>Internal Server Error: {status}</h1>
	{/if}
	<h4>{error}</h4>
</div>

<style lang="scss">
	@import '../lib/styles/main.scss';
</style>
