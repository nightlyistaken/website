<script>
	function toggle() {
		window.document.body.classList.toggle('dark-mode');
		document.getElementById('mode').innerHTML = 'Entered Light Mode!';
	}
</script>

<button on:click={toggle} class="toggler" id="mode">
	<slot />
</button>

<style lang="scss">
	@import './ModeButton.scss';
</style>
