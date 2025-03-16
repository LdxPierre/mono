import pluginJs from '@eslint/js'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
])
