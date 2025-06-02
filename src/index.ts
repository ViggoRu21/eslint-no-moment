module.exports = {
  rules: {
    'no-moment': require('./src/lib/rules/no-moment')
  },
  configs: {
    recommended: {
      rules: {
        'no-moment/no-moment': 'error'
      }
    }
  }
};
