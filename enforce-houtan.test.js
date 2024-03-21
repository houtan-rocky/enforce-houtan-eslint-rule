const { RuleTester } = require('eslint')
const enforceHoutanRule = require('./enforce-houtan')

const ruleTester = new RuleTester({
	// Must use at least ecmaVersion 2015 because
	// that's when `const` variables were introduced.
	parserOptions: { ecmaVersion: 2015 },
})

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
	'enforce-houtan', // rule name
	enforceHoutanRule, // rule code
	{
		// checks
		// 'valid' checks cases that should pass
		valid: [
			{
				code: "houtan('https://api.com');",
			},
		],
		// 'invalid' checks cases that should not pass
		invalid: [
			{
				code: "hooman('https://api.com');",
				output: "houtan('https://api.com');",
				errors: 1,
			},
		],
	}
)

console.log('All tests passed!')
