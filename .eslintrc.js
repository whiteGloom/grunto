module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  "rules": {
    'curly': "error",
    'default-case-last': 'error',
    'eqeqeq': 'error',
    'grouped-accessor-pairs': 'error',
    'no-constructor-return': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': ['error', {'allow': ['!!']}],
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-param-reassign': ['error', {'props': false}],
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-useless-return': 'error',
    'prefer-regex-literals': 'error',
    'wrap-iife': ["error", 'inside'],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': 'error'
  }
};
