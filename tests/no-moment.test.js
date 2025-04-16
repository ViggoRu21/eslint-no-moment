const { RuleTester } = require('eslint');
const rule = require('../lib/rules/no-moment');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015, sourceType: 'module' } });

ruleTester.run('no-moment', rule, {
  valid: [
    'import dayjs from "dayjs";',
    'const date = require("dayjs");'
  ],
  invalid: [
    {
      code: 'import moment from "moment";',
      errors: [{ message: 'Using moment is forbidden.' }]
    },
    {
      code: 'const moment = require("moment");',
      errors: [{ message: 'Using moment is forbidden.' }]
    }
  ]
});
