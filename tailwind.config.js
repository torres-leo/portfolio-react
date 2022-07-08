module.exports = {
	content: ['index.html', './src/**/*.jsx'],
	theme: {
		screens: {
			uxs: '369px',
			// => @media (min-width: 369px) { ... }
			xs: '479px',
			// => @media (min-width: 480px) { ... }
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite',
				'pulse-slow': 'pulse 3s linear infinite',
			},
		},
	},
	plugins: [],
	important: true,
};
