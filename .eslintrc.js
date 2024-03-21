"use strict";

// Import the ESLint plugin locally
const eslintPluginHoutan = require("./eslint-plugin-houtan");
module.exports = {
    plugins: {
        "houtan": eslintPluginHoutan,
    },
    rules: {
        "houtan/enforce-houtan": "error",
    },
    overrides: [
        {
            files: ["**/*.js"],
            parserOptions: {
                sourceType: "commonjs",
                ecmaVersion: "latest",
            },
            plugins: ["houtan"],
            rules: {
                "houtan/enforce-houtan": "error",
            },
        },
    ],
};
