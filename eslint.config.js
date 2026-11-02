import js from "@eslint/js";

export default [
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        process: "readonly",
        console: "readonly",
      }
    },
  }
];