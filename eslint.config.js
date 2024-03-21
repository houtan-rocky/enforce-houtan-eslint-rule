// eslint.config.js
"use strict";

// Import the ESLint plugin locally
const eslintPluginHoutan = require("./eslint-plugin-houtan");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
        },
        // Using the eslint-plugin-example plugin defined locally
        plugins: {"houtan": eslintPluginHoutan},
        rules: {
            "houtan/enforce-houtan": "error",
        },
    }
]