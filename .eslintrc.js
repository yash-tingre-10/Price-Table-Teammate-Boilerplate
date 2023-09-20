module.exports = {
    extends: [
      'plugin:@wordpress/eslint-plugin/recommended-with-formatting',
      'prettier',
    ],
    plugins: ['react', 'react-hooks', 'stylelint-scss'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      'react/prop-types': 0,  // Disable prop types check (optional, based on preference)
    },
  };
  