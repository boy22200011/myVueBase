import pluginVue from "eslint-plugin-vue"
import vueTsEslintConfig from "@vue/eslint-config-typescript"
import pluginVitest from "@vitest/eslint-plugin"
import pluginCypress from "eslint-plugin-cypress/flat"
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting"
import pluginVeuA11y from "eslint-plugin-vuejs-accessibility"

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"]
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]
  },

  {
    ...pluginVue.configs["flat/essential"],
    rules: {
      "vue/multi-word-component-names": "off"
    }
  },
  ,
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"]
  },

  {
    ...pluginCypress.configs.recommended,
    files: ["cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}", "cypress/support/**/*.{js,ts,jsx,tsx}"]
  },
  skipFormatting,
  {
    ...pluginVeuA11y.configs["flat/recommended"]
  }
]