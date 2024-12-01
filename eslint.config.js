import omer from "@omer-x/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  ...omer,
  {
    rules: {
    },
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: [".next/*"],
  },
];
