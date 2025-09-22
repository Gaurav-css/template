import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "@next/next/no-img-element": "off",        // Allow <img> tags
      "@next/next/no-html-link-for-pages": "off", // Allow <a> for internal links
      "react/no-unescaped-entities": "off",       // Allow unescaped ' and "
    },
  },
];

export default eslintConfig;
