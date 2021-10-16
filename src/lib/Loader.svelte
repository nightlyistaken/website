<script>
	import { onMount } from 'svelte';

	let loader;
	let Component;

	onMount(async () => {
		await new Promise((f) => setTimeout(f, 700)); // fake delay sorry :)
		Component = (await loader()).default;
	});

	export { loader as this };
</script>

<svelte:head>
	<title>loading - dhairy-online</title>
</svelte:head>

<svelte:component this={Component} {...$$restProps}>
	<slot />
</svelte:component>

{#if !Component}
	<slot name="fallback" />
{/if}
