const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans']
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'dark' // default theme for all devices
		]
	}
};

module.exports = config;
