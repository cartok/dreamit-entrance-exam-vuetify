module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    // TODO: Some rules get applied on safe and are immediately undone by something else
    // Example: vue/max-attributes-per-line
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ['**/*.{js,ts,vue}'],
      rules: {
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        'quotes': ['error', 'single'],
        '@typescript-eslint/member-delimiter-style': ['error', {
          'multiline': {
            'delimiter': 'comma',
            'requireLast': true,
          },
          'singleline': {
            'delimiter': 'comma',
            'requireLast': false,
          },
          'multilineDetection': 'brackets',
        }],
      },
    },
  ],
}
