import noMoment from "./rules/no-moment"

export const rules = {
  'no-moment': noMoment,
};

export const configs = {
  recommended: {
    plugins: ['no-moment'],
    rules: {
      'no-moment/no-moment': 'error' as const,
    }
  }
};
