/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,scss}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
