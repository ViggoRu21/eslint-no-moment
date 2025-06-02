import { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/ViggoRu21/eslint-no-moment/blob/main/src/rules/${name}.md`
);

export default createRule({
  name: 'no-moment',
  meta: {
    type: 'problem',
    docs: {
      description: 'Block usage of moment',
      recommended: true,
    },
    messages: {
      forbidden: 'Using the moment library is forbidden.'
    },
    schema: []
  },
  create(context) {
    return {
      ImportDeclaration(node: TSESTree.ImportDeclaration) {
        if (node.source.value === 'moment') {
          context.report({
            node,
            messageId: 'forbidden'
          });
        }
      },
      CallExpression(node: TSESTree.CallExpression) {
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'require' &&
          node.arguments[0] &&
          node.arguments[0].type === 'Literal' &&
          node.arguments[0].value === 'moment'
        ) {
          context.report({
            node,
            messageId: 'forbidden'
          });
        }
      }
    };
  }
});
