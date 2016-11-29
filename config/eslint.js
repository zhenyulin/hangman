module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
		"mocha": true
	},
	"parser": "babel-eslint",
	"plugins": ["react", "mocha"],
	"rules": {
		"no-undef": 2,
		"semi": 2,
		"strict": 0,
		"quotes": 0,
		"indent": ["error", "tab"],
		"curly": [2, "multi-line"],
		"no-use-before-define": [2, "nofunc"],
		"no-unused-vars": [2, "all"],
		"no-mixed-requires": [1, true],
		"max-depth": [1, 5],
		"max-len": [1, 80, 4],
		"max-params": [1, 6],
		"max-statements": [1, 20],
		"eqeqeq": 0,
		"new-cap": 0,
		"no-else-return": 1,
		"no-eq-null": 1,
		"no-lonely-if": 1,
		"no-path-concat": 0,
		"comma-dangle": 0,
		"complexity": [1, 20],
		"no-floating-decimal": 1,
		"no-void": 1,
		"no-sync": 1,
		"consistent-this": [1, "nope-dont-capture-this"],
		"mocha/no-exclusive-tests": "error",
		"max-nested-callbacks": [2, 3],
		"no-nested-ternary": 1,
		"keyword-spacing": 1,
		"space-before-function-paren": [1, "never"],
		"spaced-comment": [1, "always"],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
	}
};