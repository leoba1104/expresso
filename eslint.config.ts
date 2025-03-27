import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

export default [
    js.configs.recommended,
    {
        files: ["**/*.ts"],
        ignores: ["**/*.config.ts"],
        languageOptions: {
            parser: tsParser,
            globals: {
                process: "readonly",
                console: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": ts,
            prettier, // Prettier plugin added here
        },
        rules: {
            "no-console": "off",
            "no-unused-vars": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "prettier/prettier": "error", // Enforce Prettier formatting rules
        },
    },
    {
        // Prettier config as an object
        rules: {
            "prettier/prettier": ["error", { semi: true, singleQuote: true }],
        },
    },
];
