module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
	'plugin:react/recommended',
	'plugin:react-hooks/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
	'react',
	'react-hooks'
  ],
  rules: {
	"indent": ["error", "tab"],
	"react/jsx-indent": ["error", "tab"],
	"react/jsx-indent-props": ["error", "tab"],
	"no-tabs": 0,
	"react/prop-types": 0,
	"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
	"react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  },
  settings: {
	"react": {
	  "version": "detect" // React version. "detect" automatically picks the version you have installed.
						   // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
						   // default to latest and warns if missing
						   // It will default to "detect" in the future
	}
  }
}
