<script>
	import Toggler from '$lib/components/ModeButton.svelte';
	import { onMount } from 'svelte';
	function showText() {
		onMount(() => {
			let text = document.getElementsByClassName('see-text');
			text.content.style.display('block');
		});
	}
	function github() {
		window.location('https://github.com/dhairy-online')
	}
</script>
<svelte:head>
	<script src="https://use.fontawesome.com/a6bbc80ac1.js"></script>
</svelte:head>
<ul id="menu" class="background-opacity">
	<li><a href="/">Home</a></li>
	<li><a href="/about">About me</a></li>
	<li><a href="/404">Not Found</a></li>
	<li><Toggler>Toggle</Toggler></li>
	<button class="see collapse" on:click={showText}>X</button>
</ul>
<slot />
<div class="footer">
  <label>
  	<a class="fa fa-github fa-2x" href="https://github.com/dhairy-online"aria-hidden="true"></a>
  </label>
  <label>
  	<a class="fa fa-twitter fa-2x" href="https://twitter.com/breadoonline"aria-hidden="true"></a>
  </label>
  <label>  
  	<a class="fa fa-home fa-2x" href="/" aria-hidden="true"></a>
  </label>
</div>

<style lang="scss">
	@import '../lib/styles/footer.scss';
	@import '../lib/styles/navbar.scss';
	@import '../lib/styles/main.scss';
</style>
