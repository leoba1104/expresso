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
                describe: "readonly",
                it: "readonly",
                expect: "readonly",
                jest: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": ts,
            "prettier": prettier,
        },
        rules: {
            "no-console": "off",
            "no-unused-vars": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            // Enforce consistent indentation (4 spaces in this case)
            "indent": ["error", 4],
            // Enforce the use of single quotes for strings
            "quotes": ["error", "single"],
            // Enforce semicolons at the end of statements
            "semi": ["error", "always"],
            // Enforce consistent line breaks (LF for Unix)
            "linebreak-style": ["error", "unix"],
            // Require the use of === and !== (no implicit type conversions)
            "eqeqeq": ["error", "always"],
            // Enable Prettier as a lint rule
            "prettier/prettier": [
                "error",
                {
                    singleQuote: true,
                    semi: true,
                },
            ],
        },
    },
];
