import { TSESLint } from "@typescript-eslint/utils";
import noMoment from "./rules/no-moment";

// Thanks https://github.com/typescript-eslint/typescript-eslint/issues/7605
export const rules: Record<string, TSESLint.RuleModule<string, unknown[]>> = {
  'no-moment': noMoment,
};

export const configs = {
  recommended: {
    plugins: ['no-moment'],
    rules: {
      'no-moment/no-moment': 'error',
    }
  }
};
