<script lang="ts">
	import { fade } from 'svelte/transition';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>dhairy-online</title>
</svelte:head>

<main in:fade>
	<div class="hero min-h-screen p-36">
		<div class="flex-col hero-content lg:flex-row-reverse mr-4">
			<div>
				<h1 class="mb-5 text-6xl font-bold">
					<span
						class="glow text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-purple-200"
						>My Dev-Enviroment</span
					>
				</h1>
				<p class="text-lg font-bold pb-2 pt-1">i use arch btw</p>
				<p class="text-lg font-semibold pb-2 pt-1" />
				<Footer />
			</div>
		</div>
		<div class="alert fixed">
			<div class="flex-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#2196f3"
					class="w-6 h-6 mx-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="text-bold text-indigo-200">/enviroment is currently in BETA</label>
			</div>
		</div>
	</div>
</main>
