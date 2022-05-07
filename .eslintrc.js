module.exports = {
  root: true,
  extends: [
    '@tencent/eslint-config-tencent',
    '@tencent/eslint-config-tencent/ts',
    '@tencent/eslint-config-tencent/prettier',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    extraFileExtensions: ['.vue'],
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/naming-convention': ['off'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      },
    ],

    // 与prettier冲突
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
