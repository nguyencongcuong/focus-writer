module.exports = {
	purge: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html",
	],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				min: {
					100: "#DEDEDE",
					200: "#BDBDBD",
					300: "#9C9C9C",
					400: "#7A7A7A",
					500: "#595959",
					600: "#474747",
					700: "#363636",
					800: "#242424",
					900: "#121212",
				},
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out",
				fadeOut: "fadeOut 1s ease-in-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0.3" },
					"100%": { opacity: "1" },
				},
				fadeOut: {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
