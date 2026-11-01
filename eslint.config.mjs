import { defineConfig, globalIgnores } from 'eslint/config'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import importHelpers from 'eslint-plugin-import-helpers'

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierRecommended,
  globalIgnores(['.next/**', 'out/**', 'coverage/**', 'public/**']),
  {
    plugins: { 'import-helpers': importHelpers },
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            '/^react/',
            '/^next/',
            ['/^@/', 'module'],
            'parent',
            ['sibling', 'index']
          ],
          alphabetize: { order: 'asc', ignoreCase: true }
        }
      ]
    }
  }
])
