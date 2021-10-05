<script lang="ts">
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>dhairy-online</title>
</svelte:head>

<main in:fade>
	<div class="hero min-h-screen p-10 sm:p-36">
		<div class="flex-col hero-content lg:flex-row-reverse mr-4">
			<img
				src="https://avatars.githubusercontent.com/u/62501544?s=400&u=a32c77ee5f64207ad0577b297f44862fa064de62&v=4"
				alt="@dhairy-online"
				class="hidden sm:block w-60 h-60 avatar mask mask-squircle cursor-move transform-gpu hover:scale-95 transition-transform"
			/>
			<div class="select-none">
				<h1 class="mb-5 text-2xl font-bold sm:text-5xl">
					Hey there, I'm <span
						class="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-purple-200"
						>dhairy-online</span
					>
				</h1>
				<p class="mb-5 text-xs sm:text-lg">
					12 - 13 | Rust, TypeScript / JavaScript, TailwindCSS, <span
						class="text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-purple-300"
						>Svelte</span
					> and HTML
				</p>
				<Footer />
			</div>
		</div>
	</div>
</main>
