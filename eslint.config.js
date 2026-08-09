import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config(
  // `.design-sync`/`.ds-sync`/`ds-bundle` hold the claude.ai/design import's
  // inputs and output — preview compositions and a staged converter, not app code.
  globalIgnores(['dist', 'src/routeTree.gen.ts', '.design-sync', '.ds-sync', 'ds-bundle']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['src/routes/**/*.tsx'],
    rules: {
      // Route files only export a `Route` object, not a component — not a fast-refresh concern.
      'react-refresh/only-export-components': 'off',
    },
  },
)
