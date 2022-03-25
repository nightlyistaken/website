<script lang="ts">
	import Loader from '$lib/Loader.svelte';
	let val = 10;
	// yea, a fake kind of loader
</script>

<Loader this={() => import('../lib/Main.svelte')}>
	<div slot="fallback" class="hero min-h-screen">
		<div class="hero-content text-center motion-safe:animate-ping ">
			<div class="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full bg-gray-400" role="status">
				<span class="visually-hidden"></span>
			  </div>
		</div>
	</div>
</Loader>
