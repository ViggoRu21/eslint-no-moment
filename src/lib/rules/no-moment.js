module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow usage of moment',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'moment') {
          context.report({
            node,
            message: 'Using moment is forbidden.'
          });
        }
      },
      CallExpression(node) {
        if (
          node.callee.tyoe === 'Identifier' &&
          node.callee.name === 'require' &&
          node.arguments[0] &&
          node.arguments[0].type === 'Literal' &&
          node.arguments[0].value === 'moment'
        ) {
          context.report({
            node,
            message: 'Using moment is forbidden.'
          });
        }
      }
    };
  }
};
