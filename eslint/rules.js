const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
	rules: {


		// ------------------------  Best Practice  ------------------------


		// enforces getter/setter pairs in objects
		'accessor-pairs': 'off',

		// enforces return statements in callbacks of array's methods
		// http://eslint.org/docs/rules/array-callback-return
		'array-callback-return': 1,

		// treat var statements as if they were block scoped
		'block-scoped-var': 'error',

		// specify the maximum cyclomatic complexity allowed in a program
		complexity: ['off', 11],

		// enforce that class methods use "this"
		// http://eslint.org/docs/rules/class-methods-use-this
		'class-methods-use-this': 0,

		// require return statements to either always or never specify values
		'consistent-return': 0,

		// specify curly brace conventions for all control statements
		curly: ['error', 'multi-line'],

		// require default case in switch statements
		'default-case': ['error', {
			commentPattern: '^no default$'
		}],

		// encourages use of dot notation whenever possible
		'dot-notation': ['error', {
			allowKeywords: true,
			allowPattern: "^[a-z]+(_[a-z]+)+$"
		}],

		// enforces consistent newlines before or after dots
		// http://eslint.org/docs/rules/dot-location
		'dot-location': ['error', 'property'],

		// require the use of === and !==
		// http://eslint.org/docs/rules/eqeqeq
		eqeqeq: ['error', 'always', {
			null: 'ignore'
		}],

		// make sure for-in loops have an if statement
		'guard-for-in': 'error',

		// disallow the use of alert, confirm, and prompt
		'no-alert': 'warn',

		// disallow use of arguments.caller or arguments.callee
		'no-caller': 'error',

		// disallow lexical declarations in case/default clauses
		// http://eslint.org/docs/rules/no-case-declarations.html
		'no-case-declarations': 0,

		// disallow division operators explicitly at beginning of regular expression
		// http://eslint.org/docs/rules/no-div-regex
		'no-div-regex': 'off',

		// disallow else after a return in an if
		// https://eslint.org/docs/rules/no-else-return
		'no-else-return': ['error', {
			allowElseIf: true
		}],

		// disallow empty functions, except for standalone funcs/arrows
		// http://eslint.org/docs/rules/no-empty-function
		'no-empty-function': ['error', {
			allow: [
				'arrowFunctions',
				'functions',
				'methods',
			]
		}],

		// disallow empty destructuring patterns
		// http://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'error',

		// disallow comparisons to null without a type-checking operator
		'no-eq-null': 'off',

		// disallow use of eval()
		'no-eval': 'error',

		// disallow adding to native types
		'no-extend-native': 'error',

		// disallow unnecessary function binding
		'no-extra-bind': 'error',

		// disallow Unnecessary Labels
		// http://eslint.org/docs/rules/no-extra-label
		'no-extra-label': 'error',

		// disallow fallthrough of case statements
		'no-fallthrough': 'error',

		// disallow the use of leading or trailing decimal points in numeric literals
		'no-floating-decimal': 'error',

		// disallow reassignments of native objects or read-only globals
		// http://eslint.org/docs/rules/no-global-assign
		'no-global-assign': ['error', {
			exceptions: []
		}],

		// deprecated in favor of no-global-assign
		'no-native-reassign': 'off',

		// disallow implicit type conversions
		// http://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-coercion': ['off', {
			boolean: false,
			number: true,
			string: true,
			allow: [],
		}],

		// disallow var and named functions in global scope
		// http://eslint.org/docs/rules/no-implicit-globals
		'no-implicit-globals': 'off',

		// disallow use of eval()-like methods
		'no-implied-eval': 'error',

		// disallow this keywords outside of classes or class-like objects
		'no-invalid-this': 'off',

		// disallow usage of __iterator__ property
		'no-iterator': 'error',

		// disallow use of labels for anything other then loops and switches
		'no-labels': ['error', {
			allowLoop: false,
			allowSwitch: false
		}],

		// disallow unnecessary nested blocks
		'no-lone-blocks': 'error',

		// disallow creation of functions within loops
		'no-loop-func': 'error',

		// disallow magic numbers
		// http://eslint.org/docs/rules/no-magic-numbers
		'no-magic-numbers': ['off', {
			ignore: [],
			ignoreArrayIndexes: true,
			enforceConst: true,
			detectObjects: false,
		}],

		// disallow use of multiple spaces
		'no-multi-spaces': ['error', {
			ignoreEOLComments: true,
		}],

		// disallow use of multiline strings
		'no-multi-str': 'error',

		// disallow use of new operator when not part of the assignment or comparison
		'no-new': 'error',

		// disallow use of new operator for Function object
		'no-new-func': 'error',

		// disallows creating new instances of String, Number, and Boolean
		'no-new-wrappers': 'error',

		// disallow use of (old style) octal literals
		'no-octal': 'error',

		// disallow use of octal escape sequences in string literals, such as
		// var foo = 'Copyright \251';
		'no-octal-escape': 'error',

		// disallow reassignment of function parameters
		// disallow parameter object manipulation except for specific exclusions
		// rule: http://eslint.org/docs/rules/no-param-reassign.html
		'no-param-reassign': 0,
		// 'no-param-reassign': ['error', {
		//     props: true,
		//     ignorePropertyModificationsFor: [
		//         'acc', // for reduce accumulators
		//         'e', // for e.returnvalue
		//         'ctx', // for Koa routing
		//         'req', // for Express requests
		//         'request', // for Express requests
		//         'res', // for Express responses
		//         'response', // for Express responses
		//         '$scope', // for Angular 1 scopes
		//     ]
		// }],

		// disallow usage of __proto__ property
		'no-proto': 'error',

		// disallow declaring the same variable more then once
		'no-redeclare': 'error',

		// disallow certain object properties
		// http://eslint.org/docs/rules/no-restricted-properties
		'no-restricted-properties': ['error', {
			object: 'arguments',
			property: 'callee',
			message: 'arguments.callee is deprecated',
		}, {
			object: 'global',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'self',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'window',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'global',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			object: 'self',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			object: 'window',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			property: '__defineGetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			property: '__defineSetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			object: 'Math',
			property: 'pow',
			message: 'Use the exponentiation operator (**) instead.',
		}],

		// disallow use of assignment in return statement
		'no-return-assign': 0,

		// disallow redundant `return await`
		'no-return-await': 'error',

		// disallow use of `javascript:` urls.
		'no-script-url': 'error',

		// disallow self assignment
		// http://eslint.org/docs/rules/no-self-assign
		'no-self-assign': 'error',

		// disallow comparisons where both sides are exactly the same
		'no-self-compare': 'error',

		// disallow use of comma operator
		'no-sequences': 'error',

		// restrict what can be thrown as an exception
		'no-throw-literal': 'error',

		// disallow unmodified conditions of loops
		// http://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'off',

		// disallow usage of expressions in statement position
		'no-unused-expressions': ['error', {
			allowShortCircuit: true,
			allowTernary: false,
			allowTaggedTemplates: false,
		}],

		// disallow unused labels
		// http://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 'warn',

		// disallow unnecessary .call() and .apply()
		'no-useless-call': 'off',

		// disallow useless string concatenation
		// http://eslint.org/docs/rules/no-useless-concat
		'no-useless-concat': 'error',

		// disallow unnecessary string escaping
		// http://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'error',

		// disallow redundant return; keywords
		// http://eslint.org/docs/rules/no-useless-return
		'no-useless-return': 'error',

		// disallow use of void operator
		// http://eslint.org/docs/rules/no-void
		'no-void': 'error',

		// disallow usage of configurable warning terms in comments: e.g. todo
		'no-warning-comments': ['off', {
			terms: ['todo', 'fixme', 'xxx'],
			location: 'start'
		}],

		// disallow use of the with statement
		'no-with': 'error',

		// require using Error objects as Promise rejection reasons
		// http://eslint.org/docs/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': 0,

		// require use of the second argument for parseInt()
		radix: 'error',

		// require `await` in `async function` (note: this is a horrible rule that should never be used)
		// http://eslint.org/docs/rules/require-await
		'require-await': 'off',

		// requires to declare all vars on top of their containing scope
		'vars-on-top': 'error',

		// require immediate function invocation to be wrapped in parentheses
		// http://eslint.org/docs/rules/wrap-iife.html
		'wrap-iife': ['error', 'outside', {
			functionPrototypeMethods: false
		}],

		// require or disallow Yoda conditions
		yoda: 1,


		// ------------------------  Errors  ------------------------


		// Enforce “for” loop update clause moving the counter in the right direction
		// http://eslint.org/docs/rules/for-direction
		'for-direction': 'error',

		// Enforces that a return statement is present in property getters
		// http://eslint.org/docs/rules/getter-return
		'getter-return': ['error', {
			allowImplicit: true
		}],

		// Disallow await inside of loops
		// http://eslint.org/docs/rules/no-await-in-loop
		'no-await-in-loop': 'error',

		// Disallow comparisons to negative zero
		// http://eslint.org/docs/rules/no-compare-neg-zero
		'no-compare-neg-zero': 'error',

		// disallow assignment in conditional expressions
		'no-cond-assign': ['error', 'always'],

		// disallow use of console
		'no-console': ["error", { "allow": ["warn", "error"] }],

		// disallow use of constant expressions in conditions
		'no-constant-condition': 'warn',

		// disallow control characters in regular expressions
		'no-control-regex': 'error',

		// disallow use of debugger
		'no-debugger': 'error',

		// disallow duplicate arguments in functions
		'no-dupe-args': 'error',

		// disallow duplicate keys when creating object literals
		'no-dupe-keys': 'error',

		// disallow a duplicate case label.
		'no-duplicate-case': 'error',

		// disallow empty statements
		'no-empty': 'error',

		// disallow the use of empty character classes in regular expressions
		'no-empty-character-class': 'error',

		// disallow assigning to the exception in a catch block
		'no-ex-assign': 'error',

		// disallow double-negation boolean casts in a boolean context
		// http://eslint.org/docs/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': 0,

		// disallow unnecessary parentheses
		// http://eslint.org/docs/rules/no-extra-parens
		'no-extra-parens': ['off', 'all', {
			conditionalAssign: true,
			nestedBinaryExpressions: false,
			returnAssign: false,
			ignoreJSX: 'all', // delegate to eslint-plugin-react
			enforceForArrowConditionals: false,
		}],

		// disallow unnecessary semicolons
		'no-extra-semi': 'error',

		// disallow overwriting functions written as function declarations
		'no-func-assign': 'error',

		// disallow function or variable declarations in nested blocks
		'no-inner-declarations': 'error',

		// disallow invalid regular expression strings in the RegExp constructor
		'no-invalid-regexp': 'error',

		// disallow irregular whitespace outside of strings and comments
		'no-irregular-whitespace': 'error',

		// disallow the use of object properties of the global object (Math and JSON) as functions
		'no-obj-calls': 'error',

		// disallow use of Object.prototypes builtins directly
		// http://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 'error',

		// disallow multiple spaces in a regular expression literal
		'no-regex-spaces': 'error',

		// disallow sparse arrays
		'no-sparse-arrays': 'error',

		// Disallow template literal placeholder syntax in regular strings
		// http://eslint.org/docs/rules/no-template-curly-in-string
		'no-template-curly-in-string': 'error',

		// Avoid code that looks like two expressions but is actually one
		// http://eslint.org/docs/rules/no-unexpected-multiline
		'no-unexpected-multiline': 'error',

		// disallow unreachable statements after a return, throw, continue, or break statement
		'no-unreachable': 'error',

		// disallow return/throw/break/continue inside finally blocks
		// http://eslint.org/docs/rules/no-unsafe-finally
		'no-unsafe-finally': 'error',

		// disallow negating the left operand of relational operators
		// http://eslint.org/docs/rules/no-unsafe-negation
		'no-unsafe-negation': 'error',
		// disallow negation of the left operand of an in expression
		// deprecated in favor of no-unsafe-negation
		'no-negated-in-lhs': 'off',

		// disallow comparisons with the value NaN
		'use-isnan': 'error',

		// ensure JSDoc comments are valid
		// http://eslint.org/docs/rules/valid-jsdoc
		'valid-jsdoc': 'off',

		// ensure that the results of typeof are compared against a valid string
		// http://eslint.org/docs/rules/valid-typeof
		'valid-typeof': ['error', {
			requireStringLiterals: true
		}],


		// ------------------------  ES6  ------------------------


		// enforces no braces where they can be omitted
		// http://eslint.org/docs/rules/arrow-body-style
		'arrow-body-style': 0,

		// require parens in arrow function arguments
		// http://eslint.org/docs/rules/arrow-parens
		'arrow-parens': ['error', 'as-needed', {
			requireForBlockBody: true,
		}],

		// require space before/after arrow function's arrow
		// http://eslint.org/docs/rules/arrow-spacing
		'arrow-spacing': ['error', {
			before: true,
			after: true
		}],

		// verify super() callings in constructors
		'constructor-super': 'error',

		// enforce the spacing around the * in generator functions
		// http://eslint.org/docs/rules/generator-star-spacing
		'generator-star-spacing': ['error', {
			before: false,
			after: true
		}],

		// disallow modifying variables of class declarations
		// http://eslint.org/docs/rules/no-class-assign
		'no-class-assign': 'error',

		// disallow arrow functions where they could be confused with comparisons
		// http://eslint.org/docs/rules/no-confusing-arrow
		'no-confusing-arrow': ['error', {
			allowParens: true,
		}],

		// disallow modifying variables that are declared using const
		'no-const-assign': 'error',

		// disallow duplicate class members
		// http://eslint.org/docs/rules/no-dupe-class-members
		'no-dupe-class-members': 'error',

		// disallow importing from the same path more than once
		// http://eslint.org/docs/rules/no-duplicate-imports
		// replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		'no-duplicate-imports': 'off',

		// disallow symbol constructor
		// http://eslint.org/docs/rules/no-new-symbol
		'no-new-symbol': 'error',

		// disallow specific imports
		// http://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': 'off',

		// disallow to use this/super before super() calling in constructors.
		// http://eslint.org/docs/rules/no-this-before-super
		'no-this-before-super': 'error',

		// disallow useless computed property keys
		// http://eslint.org/docs/rules/no-useless-computed-key
		'no-useless-computed-key': 'error',

		// disallow unnecessary constructor
		// http://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 'error',

		// disallow renaming import, export, and destructured assignments to the same name
		// http://eslint.org/docs/rules/no-useless-rename
		'no-useless-rename': ['error', {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		}],

		// require let or const instead of var
		'no-var': 'error',

		// require method and property shorthand syntax for object literals
		// http://eslint.org/docs/rules/object-shorthand
		'object-shorthand': ['error', 'always', {
			ignoreConstructors: false,
			avoidQuotes: true,
		}],

		// suggest using arrow functions as callbacks
		'prefer-arrow-callback': ['error', {
			allowNamedFunctions: false,
			allowUnboundThis: true,
		}],

		// suggest using of const declaration for variables that are never modified after declared
		'prefer-const': ['error', {
			destructuring: 'any',
			ignoreReadBeforeAssign: true,
		}],

		// Prefer destructuring from arrays and objects
		// http://eslint.org/docs/rules/prefer-destructuring
		'prefer-destructuring': 0,

		// disallow parseInt() in favor of binary, octal, and hexadecimal literals
		// http://eslint.org/docs/rules/prefer-numeric-literals
		'prefer-numeric-literals': 'error',

		// suggest using Reflect methods where applicable
		// http://eslint.org/docs/rules/prefer-reflect
		'prefer-reflect': 'off',

		// use rest parameters instead of arguments
		// http://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 0,

		// suggest using the spread operator instead of .apply()
		// http://eslint.org/docs/rules/prefer-spread
		'prefer-spread': 'error',

		// suggest using template literals instead of string concatenation
		// http://eslint.org/docs/rules/prefer-template
		'prefer-template': 0,

		// disallow generator functions that do not have yield
		// http://eslint.org/docs/rules/require-yield
		'require-yield': 'error',

		// enforce spacing between object rest-spread
		// http://eslint.org/docs/rules/rest-spread-spacing
		'rest-spread-spacing': ['error', 'never'],

		// import sorting
		// http://eslint.org/docs/rules/sort-imports
		'sort-imports': ['off', {
			ignoreCase: false,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
		}],

		// require a Symbol description
		// http://eslint.org/docs/rules/symbol-description
		'symbol-description': 'error',

		// enforce usage of spacing in template strings
		// http://eslint.org/docs/rules/template-curly-spacing
		'template-curly-spacing': 'error',

		// enforce spacing around the * in yield* expressions
		// http://eslint.org/docs/rules/yield-star-spacing
		'yield-star-spacing': ['error', 'after'],


		// ------------------------  Node  ------------------------


		// enforce return after a callback
		'callback-return': 'off',

		// require all requires be top-level
		// http://eslint.org/docs/rules/global-require
		'global-require': 0,

		// enforces error handling in callbacks (node environment)
		'handle-callback-err': 'off',

		// disallow use of the Buffer() constructor
		// http://eslint.org/docs/rules/no-buffer-constructor
		'no-buffer-constructor': 'error',

		// disallow mixing regular variable and require declarations
		'no-mixed-requires': ['off', false],

		// disallow use of new operator with the require function
		'no-new-require': 'error',

		// disallow string concatenation with __dirname and __filename
		// http://eslint.org/docs/rules/no-path-concat
		'no-path-concat': 'error',

		// disallow use of process.env
		'no-process-env': 'off',

		// disallow process.exit()
		'no-process-exit': 'off',

		// restrict usage of specified node modules
		'no-restricted-modules': 'off',

		// disallow use of synchronous methods (off by default)
		'no-sync': 'off',


		// ------------------------  Strict  ------------------------


		// babel inserts `'use strict';` for us
		strict: ['error', 'never'],


		// ------------------------  Style  ------------------------


		// enforce line breaks after opening and before closing array brackets
		// http://eslint.org/docs/rules/array-bracket-newline
		'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

		// enforce line breaks between array elements
		// http://eslint.org/docs/rules/array-element-newline
		'array-element-newline': ['off', {
			multiline: true,
			minItems: 3
		}],

		// enforce spacing inside array brackets
		'array-bracket-spacing': ['error', 'never'],

		// enforce spacing inside single-line blocks
		// http://eslint.org/docs/rules/block-spacing
		'block-spacing': ['error', 'always'],

		// enforce one true brace style
		'brace-style': ['error', '1tbs', {
			allowSingleLine: true
		}],

		// require camel case names
		camelcase: ['error', {
			properties: 'never'
		}],

		// enforce or disallow capitalization of the first letter of a comment
		// http://eslint.org/docs/rules/capitalized-comments
		'capitalized-comments': ['off', 'never', {
			line: {
				ignorePattern: '.*',
				ignoreInlineComments: true,
				ignoreConsecutiveComments: true,
			},
			block: {
				ignorePattern: '.*',
				ignoreInlineComments: true,
				ignoreConsecutiveComments: true,
			},
		}],

		// require trailing commas in multiline object literals
		'comma-dangle': ['error', {
			arrays: 'never',
			objects: 'never',
			imports: 'never',
			exports: 'never',
			functions: 'never',
		}],

		// enforce spacing before and after comma
		'comma-spacing': ['error', {
			before: false,
			after: true
		}],

		// enforce one true comma style
		'comma-style': ['error', 'last'],

		// disallow padding inside computed properties
		'computed-property-spacing': ['error', 'never'],

		// enforces consistent naming when capturing the current execution context
		'consistent-this': 'off',

		// enforce newline at the end of file, with no multiple empty lines
		'eol-last': ['error', 'always'],

		// enforce spacing between functions and their invocations
		// http://eslint.org/docs/rules/func-call-spacing
		'func-call-spacing': ['error', 'never'],

		// requires function names to match the name of the variable or property to which they are
		// assigned
		// http://eslint.org/docs/rules/func-name-matching
		'func-name-matching': ['off', 'always', {
			includeCommonJSModuleExports: false
		}],

		// require function expressions to have a name
		// http://eslint.org/docs/rules/func-names
		'func-names': 0,

		// enforces use of function declarations or expressions
		// http://eslint.org/docs/rules/func-style
		'func-style': ['off', 'expression'],

		// enforce consistent line breaks inside function parentheses
		// https://eslint.org/docs/rules/function-paren-newline
		'function-paren-newline': ['error', 'multiline'],

		// Blacklist certain identifiers to prevent them being used
		// http://eslint.org/docs/rules/id-blacklist
		'id-blacklist': 'off',

		// this option enforces minimum and maximum identifier lengths
		// (variable names, property names etc.)
		'id-length': 'off',

		// require identifiers to match the provided regular expression
		'id-match': 'off',

		// this option sets a specific tab width for your code
		// http://eslint.org/docs/rules/indent
		indent: ['error', 2, {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			// MemberExpression: null,
			FunctionDeclaration: {
				parameters: 1,
				body: 1
			},
			FunctionExpression: {
				parameters: 1,
				body: 1
			},
			CallExpression: {
				arguments: 1
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			ignoredNodes: ['JSXElement', 'JSXElement *']
		}],

		// specify whether double or single quotes should be used in JSX attributes
		// http://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': ['off', 'prefer-double'],

		// enforces spacing between keys and values in object literal properties
		'key-spacing': ['error', {
			beforeColon: false,
			afterColon: true
		}],

		// require a space before & after certain keywords
		'keyword-spacing': ['error', {
			before: true,
			after: true,
			overrides: {
				return: { after: true },
				throw: { after: true },
				case: { after: true }
			}
		}],

		// enforce position of line comments
		// http://eslint.org/docs/rules/line-comment-position
		'line-comment-position': ['off', {
			position: 'above',
			ignorePattern: '',
			applyDefaultPatterns: true,
		}],

		// disallow mixed 'LF' and 'CRLF' as linebreaks
		// http://eslint.org/docs/rules/linebreak-style
		'linebreak-style': ['error', 'unix'],

		// require or disallow an empty line between class members
		// https://eslint.org/docs/rules/lines-between-class-members
		'lines-between-class-members': ['off', 'always', {
			exceptAfterSingleLine: false
		}],

		// enforces empty lines around comments
		'lines-around-comment': 'off',

		// require or disallow newlines around directives
		// http://eslint.org/docs/rules/lines-around-directive
		'lines-around-directive': ['error', {
			before: 'always',
			after: 'always',
		}],

		// specify the maximum depth that blocks can be nested
		'max-depth': ['off', 4],

		// specify the maximum length of a line in your program
		// http://eslint.org/docs/rules/max-len
		"max-len": 0,
		// 'max-len': ['error', 100, 2, {
		//     ignoreUrls: true,
		//     ignoreComments: false,
		//     ignoreRegExpLiterals: true,
		//     ignoreStrings: true,
		//     ignoreTemplateLiterals: true,
		// }],

		// specify the max number of lines in a file
		// http://eslint.org/docs/rules/max-lines
		'max-lines': ['off', {
			max: 300,
			skipBlankLines: true,
			skipComments: true
		}],

		// specify the maximum depth callbacks can be nested
		'max-nested-callbacks': 'off',

		// limits the number of parameters that can be used in the function declaration.
		'max-params': ['off', 3],

		// specify the maximum number of statement allowed in a function
		'max-statements': ['off', 10],

		// restrict the number of statements per line
		// http://eslint.org/docs/rules/max-statements-per-line
		'max-statements-per-line': ['off', { max: 1 }],

		// enforce a particular style for multiline comments
		// https://eslint.org/docs/rules/multiline-comment-style
		'multiline-comment-style': ['off', 'starred-block'],

		// require multiline ternary
		// http://eslint.org/docs/rules/multiline-ternary
		'multiline-ternary': ['off', 'never'],

		// require a capital letter for constructors
		'new-cap': ['error', {
			newIsCap: true,
			newIsCapExceptions: [],
			capIsNew: false,
			capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
		}],

		// disallow the omission of parentheses when invoking a constructor with no arguments
		// http://eslint.org/docs/rules/new-parens
		'new-parens': 'error',

		// allow/disallow an empty newline after var statement
		'newline-after-var': 'off',

		// http://eslint.org/docs/rules/newline-before-return
		'newline-before-return': 'off',

		// enforces new line after each method call in the chain to make it
		// more readable and easy to maintain
		// http://eslint.org/docs/rules/newline-per-chained-call
		'newline-per-chained-call': ['error', {
			ignoreChainWithDepth: 5
		}],

		// disallow use of the Array constructor
		'no-array-constructor': 'error',

		// disallow use of bitwise operators
		// http://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',

		// disallow use of the continue statement
		// http://eslint.org/docs/rules/no-continue
		'no-continue': 0,

		// disallow comments inline after code
		'no-inline-comments': 'off',

		// disallow if as the only statement in an else block
		// http://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'error',

		// disallow un-paren'd mixes of different operators
		// http://eslint.org/docs/rules/no-mixed-operators
		'no-mixed-operators': ['error', {
			groups: [
				['+', '-', '*', '/', '%', '**'],
				['&', '|', '^', '~', '<<', '>>', '>>>'],
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||'],
				['in', 'instanceof']
			],
			allowSamePrecedence: false
		}],

		// disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': 'error',

		// disallow use of chained assignment expressions
		// http://eslint.org/docs/rules/no-multi-assign
		'no-multi-assign': ['error'],

		// disallow multiple empty lines and only one newline at the end
		'no-multiple-empty-lines': ['error', {
			max: 2,
			maxEOF: 1
		}],

		// disallow negated conditions
		// http://eslint.org/docs/rules/no-negated-condition
		'no-negated-condition': 'off',

		// disallow nested ternary expressions
		'no-nested-ternary': 'error',

		// disallow use of the Object constructor
		'no-new-object': 'error',

		// disallow use of unary operators, ++ and --
		// http://eslint.org/docs/rules/no-plusplus
		// 'no-plusplus': 'error',

		// disallow certain syntax forms
		// http://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': [
			'error', {
				selector: 'ForOfStatement',
				message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
			}, {
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
			}, {
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
			},
		],

		'no-restricted-syntax': [
			0, {
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain. Please use Object.{keys,values,entries} if possible.'
			}
		],

		// disallow space between function identifier and application
		'no-spaced-func': 'error',

		// disallow tab characters entirely
		'no-tabs': 0,

		// disallow the use of ternary operators
		'no-ternary': 'off',

		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],

		// disallow dangling underscores in identifiers
		'no-underscore-dangle': ['error', {
			allow: [],
			allowAfterThis: false,
			allowAfterSuper: false,
			enforceInMethodNames: false,
		}],

		// disallow the use of Boolean literals in conditional expressions
		// also, prefer `a || b` over `a ? a : b`
		// http://eslint.org/docs/rules/no-unneeded-ternary
		'no-unneeded-ternary': ['error', {
			defaultAssignment: false
		}],

		// disallow whitespace before properties
		// http://eslint.org/docs/rules/no-whitespace-before-property
		'no-whitespace-before-property': 'error',

		// enforce the location of single-line statements
		// http://eslint.org/docs/rules/nonblock-statement-body-position
		'nonblock-statement-body-position': 'off',

		// require padding inside curly braces
		'object-curly-spacing': ['error', 'always'],

		// enforce line breaks between braces
		// http://eslint.org/docs/rules/object-curly-newline
		'object-curly-newline': ['error', {
			ObjectExpression: {
				minProperties: 8,
				multiline: true,
				consistent: true
			},
			ObjectPattern: {
				minProperties: 8,
				multiline: true,
				consistent: true
			}
		}],

		// enforce "same line" or "multiple line" on object properties.
		// http://eslint.org/docs/rules/object-property-newline
		'object-property-newline': ['error', {
			allowMultiplePropertiesPerLine: true,
		}],

		// allow just one var statement per function
		'one-var': ['error', 'never'],

		// require a newline around variable declaration
		// http://eslint.org/docs/rules/one-var-declaration-per-line
		'one-var-declaration-per-line': ['error', 'always'],

		// require assignment operator shorthand where possible or prohibit it entirely
		// http://eslint.org/docs/rules/operator-assignment
		'operator-assignment': ['error', 'always'],

		// enforce operators to be placed before or after line breaks
		'operator-linebreak': 'off',

		// disallow padding within blocks
		'padded-blocks': ['error', {
			blocks: 'never',
			classes: 'never',
			switches: 'never'
		}],

		// Require or disallow padding lines between statements
		// http://eslint.org/docs/rules/padding-line-between-statements
		'padding-line-between-statements': 'off',

		// require quotes around object literal property names
		// http://eslint.org/docs/rules/quote-props.html
		'quote-props': ['error', 'as-needed', {
			keywords: false,
			unnecessary: true,
			numbers: false
		}],

		// specify whether double or single quotes should be used
		quotes: ['error', 'single', {
			avoidEscape: true
		}],

		// do not require jsdoc
		// http://eslint.org/docs/rules/require-jsdoc
		'require-jsdoc': 'off',

		// require or disallow use of semicolons instead of ASI
		semi: ['error', 'always'],

		// enforce spacing before and after semicolons
		'semi-spacing': ['error', {
			before: false,
			after: true
		}],

		// Enforce location of semicolons
		// http://eslint.org/docs/rules/semi-style
		'semi-style': ['error', 'last'],

		// requires object keys to be sorted
		'sort-keys': ['off', 'asc', {
			caseSensitive: false,
			natural: true
		}],

		// sort variables within the same declaration block
		'sort-vars': 'off',

		// require or disallow space before blocks
		'space-before-blocks': 'error',

		// require or disallow space before function opening parenthesis
		// http://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always'
		}],

		// require or disallow spaces inside parentheses
		'space-in-parens': ['error', 'never'],

		// require spaces around operators
		'space-infix-ops': 'error',

		// Require or disallow spaces before/after unary operators
		// http://eslint.org/docs/rules/space-unary-ops
		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
			overrides: {},
		}],

		// require or disallow a space immediately following the // or /* in a comment
		// http://eslint.org/docs/rules/spaced-comment
		'spaced-comment': ['error', 'always', {
			line: {
				exceptions: ['-', '+'],
				markers: ['=', '!'], // space here to support sprockets directives
			},
			block: {
				exceptions: ['-', '+'],
				markers: ['=', '!'], // space here to support sprockets directives
				balanced: true,
			}
		}],

		// Enforce spacing around colons of switch statements
		// http://eslint.org/docs/rules/switch-colon-spacing
		'switch-colon-spacing': ['error', {
			after: true,
			before: false
		}],

		// Require or disallow spacing between template tags and their literals
		// http://eslint.org/docs/rules/template-tag-spacing
		'template-tag-spacing': ['error', 'never'],

		// require or disallow the Unicode Byte Order Mark
		// http://eslint.org/docs/rules/unicode-bom
		'unicode-bom': ['error', 'never'],

		// require regex literals to be wrapped in parentheses
		'wrap-regex': 'off',


		// ------------------------  Variables  ------------------------


		// enforce or disallow variable initializations at definition
		'init-declarations': 'off',

		// disallow the catch clause parameter name being the same as a variable in the outer scope
		'no-catch-shadow': 'off',

		// disallow deletion of variables
		'no-delete-var': 'error',

		// disallow labels that share a name with a variable
		// http://eslint.org/docs/rules/no-label-var
		'no-label-var': 'error',

		// disallow specific globals
		'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(restrictedGlobals),

		// disallow declaration of variables already declared in the outer scope
		'no-shadow': 0,

		// disallow shadowing of names such as arguments
		'no-shadow-restricted-names': 'error',

		// disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undef': 'error',

		// disallow use of undefined when initializing variables
		'no-undef-init': 'error',

		// disallow use of undefined variable
		// http://eslint.org/docs/rules/no-undefined
		'no-undefined': 'off',

		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		'no-unused-labels': 'error',

		// disallow declaration of variables that are not used in the code
		'no-unused-vars': [
			'error',
			{
				args: 'none',
				ignoreRestSiblings: true,
			},
		],

		// disallow use of variables before they are defined
		'no-use-before-define': ['warn', {
			functions: false,
			classes: false,
			variables: false
		}],

		// https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
		'react/jsx-no-comment-textnodes': 'warn',
		'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
		'react/jsx-no-target-blank': 'warn',
		'react/jsx-no-undef': 'error',
		'react/jsx-pascal-case': [
			'warn',
			{
				allowAllCaps: true,
				ignore: [],
			},
		],
		'react/jsx-uses-react': 'warn',
		'react/jsx-uses-vars': 'warn',
		'react/no-danger-with-children': 'warn',
		'react/no-deprecated': 0,
		'react/no-direct-mutation-state': 'warn',
		'react/no-is-mounted': 'warn',
		'react/react-in-jsx-scope': 'error',
		'react/require-render-return': 'error',
		'react/style-prop-object': 'warn',

		// https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
		'jsx-a11y/accessible-emoji': 'warn',
		'jsx-a11y/alt-text': 'warn',
		'jsx-a11y/anchor-has-content': 'warn',
		'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
		'jsx-a11y/aria-props': 'warn',
		'jsx-a11y/aria-proptypes': 'warn',
		'jsx-a11y/aria-role': 'warn',
		'jsx-a11y/aria-unsupported-elements': 'warn',
		'jsx-a11y/heading-has-content': 'warn',
		'jsx-a11y/href-no-hash': 'off',
		'jsx-a11y/iframe-has-title': 'warn',
		'jsx-a11y/img-redundant-alt': 'warn',
		'jsx-a11y/no-access-key': 'warn',
		'jsx-a11y/no-distracting-elements': 'warn',
		'jsx-a11y/no-redundant-roles': 'warn',
		'jsx-a11y/role-has-required-aria-props': 'warn',
		'jsx-a11y/role-supports-aria-props': 'warn',
		'jsx-a11y/scope': 'warn',

		// https://github.com/gajus/eslint-plugin-flowtype
		'flowtype/define-flow-type': 'warn',
		'flowtype/require-valid-file-annotation': 'warn',
		'flowtype/use-flow-type': 'warn',
	},
	settings: {
		// ------------------------  Imports  ------------------------


		// Static analysis:

		// ensure imports point to files/modules that can be resolved
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
		'import/no-unresolved': ['error', {
			commonjs: true,
			caseSensitive: true
		}],

		// ensure named imports coupled with named exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
		'import/named': 'off',

		// ensure default import coupled with default export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
		'import/default': 'off',

		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
		'import/namespace': 'off',

		// Helpful warnings:

		// disallow invalid exports, e.g. multiple defaults
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
		'import/export': 'error',

		// do not allow a default import name to match a named export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
		'import/no-named-as-default': 'error',

		// warn on accessing default export property names that are also named exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
		'import/no-named-as-default-member': 'error',

		// disallow use of jsdoc-marked-deprecated imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
		'import/no-deprecated': 'off',

		// Forbid the use of extraneous packages
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		// paths are treated both as absolute paths, and relative to process.cwd()
		// TODO: Replace with project folders
		'import/no-extraneous-dependencies': ['error', {
			devDependencies: [
				'test/**', // tape, common npm pattern
				'tests/**', // also common npm pattern
				'spec/**', // mocha, rspec-like pattern
				'**/__tests__/**', // jest pattern
				'test.{js,jsx}', // repos with a single test file
				'test-*.{js,jsx}', // repos with multiple top-level test files
				'**/*.{test,spec}.{js,jsx}', // tests where the extension denotes that it is a test
				'**/jest.config.js', // jest config
				'**/webpack.config.js', // webpack config
				'**/webpack.config.*.js', // webpack config
				'**/rollup.config.js', // rollup config
				'**/rollup.config.*.js', // rollup config
				'**/gulpfile.js', // gulp config
				'**/gulpfile.*.js', // gulp config
				'**/Gruntfile{,.js}', // grunt config
				'**/protractor.conf.js', // protractor config
				'**/protractor.conf.*.js', // protractor config
			],
			optionalDependencies: false,
		}],

		// Forbid mutable exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
		'import/no-mutable-exports': 'error',

		// Module systems:

		// disallow require()
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
		'import/no-commonjs': 'off',

		// disallow AMD require/define
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
		'import/no-amd': 'error',

		// No Node.js builtin modules
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
		'import/no-nodejs-modules': 'off',

		// Style guide:

		// disallow non-import statements appearing before import statements
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
		'import/first': ['error', 'absolute-first'],

		// disallow non-import statements appearing before import statements
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
		// deprecated: use `import/first`
		'import/imports-first': 'off',

		// disallow duplicate imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		'import/no-duplicates': 'error',

		// disallow namespace imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
		'import/no-namespace': 'off',

		// Ensure consistent use of file extension within the import path
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
		'import/extensions': ['error', 'always', {
			js: 'never',
			jsx: 'never',
		}],

		// Enforce a convention in module import order
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
		'import/order': ['off', {
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			'newlines-between': 'never',
		}],

		// Require a newline after the last import/require in a group
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
		'import/newline-after-import': 'error',

		// Require modules with a single export to use a default export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
		'import/prefer-default-export': 0,

		// Restrict which files can be imported in a given folder
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
		'import/no-restricted-paths': 'off',

		// Forbid modules to have too many dependencies
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
		'import/max-dependencies': ['off', {
			max: 10
		}],

		// Forbid import of modules using absolute paths
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
		'import/no-absolute-path': 'error',

		// Forbid require() calls with expressions
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
		'import/no-dynamic-require': 'error',

		// prevent importing the submodules of other modules
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
		'import/no-internal-modules': ['off', {
			allow: [],
		}],

		// Warn if a module could be mistakenly parsed as a script by a consumer
		// leveraging Unambiguous JavaScript Grammar
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
		// this should not be enabled until this proposal has at least been *presented* to TC39.
		// At the moment, it's not a thing.
		'import/unambiguous': 'off',

		// Forbid Webpack loader syntax in imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
		'import/no-webpack-loader-syntax': 'error',

		// Prevent unassigned imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
		// importing for side effects is perfectly acceptable, if you need side effects.
		'import/no-unassigned-import': 'off',

		// Prevent importing the default as if it were named
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
		'import/no-named-default': 'error',

		// Reports if a module's default export is unnamed
		// https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
		'import/no-anonymous-default-export': ['off', {
			allowArray: false,
			allowArrowFunction: false,
			allowAnonymousClass: false,
			allowAnonymousFunction: false,
			allowLiteral: false,
			allowObject: false,
		}],
	}
}