module.exports = {
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  useTabs: false,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
