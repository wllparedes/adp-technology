
module.exports = {
	extends: ['plugin:astro/recommended'],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			rules: {
				// Aquí puedes agregar o sobrescribir las reglas
				// Ejemp: "astro/no-set-html-directive": "error"
			},
		},
	],
};
