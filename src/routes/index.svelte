<script lang="ts">
	import Loader from '$lib/Loader.svelte';
	let val = 10;
	// yea, a fake kind of loader
	setInterval(() => {
		val++;
		if (val > 99) {
			val = 99;
		}
	}, 30);
</script>

<Loader this={() => import('../lib/Main.svelte')}>
	<div slot="fallback" class="hero min-h-screen">
		<div class="hero-content text-center">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				Loading - {val}% done.
			</label>
			<progress class="progress progress-info" value={val} max="100" />
		</div>
	</div>
</Loader>
