module.exports = {
	meta: {
		type: 'problem',
		hasSuggestions: true,
		fixable: true,
	},

	create(context) {
		return {
			Identifier(node) {
				if (node.name === 'hooman') {
					context.report({
						message: 'prefer houtan to hooman',
						node,
						fix(fixer) {
							return [fixer.replaceText(node, 'houtan')]
						},
					})
				}
			},
		}
	},
}
