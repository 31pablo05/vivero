/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'verde-hoja': '#3a7a3a',
				'verde-claro': '#a7d7a7',
				'beige-tierra': '#f5f3e7',
				'marron-suave': '#8b6b4f',
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
