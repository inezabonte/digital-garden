module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-body': '#121212',
				accent: '#00DD8D',
			},
			fontFamily: {
				sans: ['Fira Sans', 'sans-serif'],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							textDecorationColor: theme('colors.accent'),
							textDecorationThickness: '2px',
							textUnderlineOffset: '4px',
						},
						'a:hover': {
							backgroundColor: theme('colors.accent'),
							color: theme('colors.white'),
						},
					},
				},
				dark: {
					css: [
						{
							color: theme('colors.gray.400'),
							'[class~="lead"]': {
								color: theme('colors.gray.300'),
							},
							a: {
								color: theme('colors.white'),
							},
							'a:hover': {
								backgroundColor: theme('colors.accent'),
								color: theme('colors.dark-body'),
							},
							strong: {
								color: theme('colors.white'),
							},
							'ol > li::before': {
								color: theme('colors.gray.400'),
							},
							'ul > li::before': {
								backgroundColor: theme('colors.gray.600'),
							},
							hr: {
								borderColor: theme('colors.gray.200'),
							},
							blockquote: {
								color: theme('colors.gray.200'),
								borderLeftColor: theme('colors.gray.600'),
							},
							h1: {
								color: theme('colors.white'),
							},
							h2: {
								color: theme('colors.white'),
							},
							h3: {
								color: theme('colors.white'),
							},
							h4: {
								color: theme('colors.white'),
							},
							'figure figcaption': {
								color: theme('colors.gray.400'),
							},
							code: {
								color: theme('colors.white'),
							},
							'a code': {
								color: theme('colors.white'),
							},
							pre: {
								color: theme('colors.gray.200'),
								backgroundColor: theme('colors.gray.800'),
							},
							thead: {
								color: theme('colors.white'),
								borderBottomColor: theme('colors.gray.400'),
							},
							'tbody tr': {
								borderBottomColor: theme('colors.gray.600'),
							},
						},
					],
				},
			}),
		},
	},
	variants: {
		extend: {
			typography: ['dark'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
