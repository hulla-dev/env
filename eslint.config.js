// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  /* eslint-disable @typescript-eslint/no-unsafe-argument */
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  /* eslint-enable @typescript-eslint/no-unsafe-argument */
  /* eslint-enable @typescript-eslint/no-unsafe-member-access */
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
  // {
  //   plugins: ["prettier"]
  // }
)
