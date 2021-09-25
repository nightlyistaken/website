<script>
	// @ts-nocheck
	import '../app.postcss';
	function inProgress() {
		window.document.body.requestFullscreen();
	}
</script>

<svelte:head>
	<script src="https://use.fontawesome.com/a6bbc80ac1.js"></script>
</svelte:head>
<div class="p-4">
	<!-- svelte-ignore a11y-missing-attribute -->
	<div class="navbar shadow-2xl bg-neutral text-neutral-content rounded-box h-8">
		<div class="navbar-start">
			<div class="avatar pr-5 pt-8 pl-2">
				<div class="mb-8 rounded-full w-10 h-10 ring">
					<img src="https://avatars.githubusercontent.com/u/62501544?v=4" />
				</div>
			</div>
			<a href="https://github.com/dhairy-online"
				><span class="text-lg font-bold">dhairy-online</span></a
			>
		</div>
		<div class="hidden px-2 mx-2 navbar-center lg:flex">
			<div class="flex items-stretch">
				<a class="btn btn-ghost btn-sm rounded-btn" href="/"> Home </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="/portfolio"> Portfolio </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="/about"> About </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="mailto:dhairy.srivastava5@gmail.com">
					Contact
				</a>
				<label for="my-modal-2" class="btn btn-ghost btn-sm rounded-btn modal-button"
					>View Mode</label
				>
				<input type="checkbox" on:click={inProgress} id="my-modal-2" class="modal-toggle" />
				<div class="modal">
					<div class="modal-box">
						<p>
							You are currently viewing this webpage in full screen. <br />
							Press <kbd class="kbd">Esc</kbd> on your keyboard to enter normal mode.
						</p>
						<div class="modal-action">
							<label for="my-modal-2" class="btn btn-primary">Ok!</label>
							<label for="my-modal-2" class="btn"
								>No, I'll just press <kbd class="btn-sm">Esc</kbd></label
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="navbar-end">
			<button class="btn btn-square btn-ghost">
				<a href="https://www.youtube.com/channel/UCop9MVGK7ua9oeTGzKdWDwQ"
					><img src="https://img.icons8.com/material-outlined/24/ffffff/youtube-play--v1.png" /></a
				>
			</button>
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>

<slot />
<div class="pl-24 pt-4">
	<a
		href="https://github.com/dhairy-online/website/issues/new"
		class="btn btn-primary btn-sm normal-case text-sm rounded-lg shadow-lg hover:ring-1"
		>Report A Issue</a
	>
</div>
