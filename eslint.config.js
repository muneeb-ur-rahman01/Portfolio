import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // `motion` is used as <motion.div />, which plain ESLint doesn't count as a usage
      'no-unused-vars': [
        'error',
        { varsIgnorePattern: '^(motion|[A-Z_])', argsIgnorePattern: '^[A-Z_]' },
      ],
    },
  },
  {
    // Tooling configs run in Node, not the browser
    files: ['tailwind.config.js', 'vite.config.js', 'postcss.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
