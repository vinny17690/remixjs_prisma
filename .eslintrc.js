module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'airbnb/hooks',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'no-tabs': ['error', {
			allowIndentationTabs: true,
		}],
		indent: ['error', 'tab'],
		'no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: true,
		}],
		'quote-props': ['error', 'as-needed'],
		'space-before-blocks': ['error'],
		'keyword-spacing': ['error'],
		'space-infix-ops': ['error'],
		'no-console': 0,
		'object-curly-spacing': ['error', 'always'],
		quotes: ['error', 'single'],
		'linebreak-style': 0,
		'prefer-destructuring': ['error', { object: true, array: false }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/forbid-prop-types': 'off',
		'no-underscore-dangle': 'off',
		'jsx-a11y/anchor-is-valid': ['error', {
			components: ['Link'],
			specialLink: ['hrefLeft', 'hrefRight'],
			aspects: ['invalidHref', 'preferButton'],
		}],
		'max-len': ['error', { code: 150, ignoreComments: true }],
		'react/static-property-placement': ['warn', 'static public field'], // `static public field` enabled
		'react/jsx-props-no-spreading': 0,
		'import/prefer-default-export': 'off',
		camelcase: 'off',
		'prefer-const': 'off',
	},
};
