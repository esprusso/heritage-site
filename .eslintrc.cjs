module.exports = {
    root: true,
    env: { browser: true, es2022: true, node: true },
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
    plugins: ['react', 'react-hooks'],
    extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
    settings: { react: { version: 'detect' } },
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-no-undef': 'error',
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
    },
};
